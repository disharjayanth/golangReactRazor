package main

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"io/fs"
	"net/http"
	"os"
	"strings"

	"github.com/joho/godotenv"
	"github.com/razorpay/razorpay-go"
)

//// go:embed client/build/index.html
//// go:embed client/build/static/*
// var reactFS embed.FS

type hookedResponseWriter struct {
	http.ResponseWriter
	got404 bool
}

func (hrw *hookedResponseWriter) WriteHeader(status int) {
	if status == http.StatusNotFound {
		hrw.got404 = true
	} else {
		hrw.ResponseWriter.WriteHeader(status)
	}
}

func (hrw *hookedResponseWriter) Write(p []byte) (int, error) {
	if hrw.got404 {
		return len(p), nil
	}
	return hrw.ResponseWriter.Write(p)
}

func intercept404(handler, on404 http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		hookedWriter := &hookedResponseWriter{ResponseWriter: rw}
		handler.ServeHTTP(hookedWriter, r)

		if hookedWriter.got404 {
			on404.ServeHTTP(rw, r)
		}
	})
}

func serveFileContents(file string, files http.FileSystem) http.HandlerFunc {
	return func(rw http.ResponseWriter, r *http.Request) {
		if !strings.Contains(r.Header.Get("Accept"), "text/html") {
			rw.WriteHeader(http.StatusNotFound)
			fmt.Fprint(rw, "404 not found")

			return
		}

		index, err := files.Open(file)
		if err != nil {
			rw.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(rw, "%s not found", file)

			return
		}

		fi, err := index.Stat()
		if err != nil {
			rw.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(rw, "%s not found", file)

			return
		}

		rw.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeContent(rw, r, fi.Name(), fi.ModTime(), index)
	}
}

func init() {
	godotenv.Load()
}

func paymentHandler(w http.ResponseWriter, r *http.Request) {
	var requestData struct {
		Name   string `json:"name"`
		Email  string `json:"email"`
		Phone  string `json:"phone"`
		Amount int    `json:"amount"`
	}
	json.NewDecoder(r.Body).Decode(&requestData)

	client := razorpay.NewClient(os.Getenv("RAZOR_PUBLIC_KEY"), os.Getenv("RAZOR_SECRET_KEY"))
	b := make([]byte, 5)
	if _, err := rand.Read(b); err != nil {
		panic(err)
	}
	s := fmt.Sprintf("%X", b)
	// fmt.Println(s)
	paymentLinkData := map[string]interface{}{
		"amount":       requestData.Amount,
		"currency":     "INR",
		"reference_id": s,
		"description":  "Practing golang with razor pay",
		"customer": map[string]interface{}{
			"name":    requestData.Name,
			"contact": requestData.Phone,
			"email":   requestData.Email,
		},
		"notify": map[string]interface{}{
			"sms":   true,
			"email": true,
		},
		"callback_url":    "https://www.jayantha.in",
		"callback_method": "get",
	}

	body, err := client.PaymentLink.Create(paymentLinkData, nil)
	if err != nil {
		fmt.Println("Error creating a payment link:", err)
		return
	}

	w.Write([]byte(body["short_url"].(string)))
}

var frontend fs.FS = os.DirFS("client/build")

func main() {
	server := http.Server{}
	if os.Getenv("ENV") == "DEV" {
		server = http.Server{
			Addr: "localhost:4000",
		}
	} else {
		server = http.Server{
			Addr: ":" + os.Getenv("PORT"),
		}
	}

	// distFS, err := fs.Sub(reactFS, "client/build")
	// if err != nil {
	// 	log.Fatal(err)
	// }

	httpFS := http.FS(frontend)
	fileServer := http.FileServer(httpFS)
	serveIndex := serveFileContents("index.html", httpFS)

	http.Handle("/", intercept404(fileServer, serveIndex))
	// http.Handle("/", http.FileServer(http.Dir("client/build/")))
	// http.Handle("/", http.FileServer(http.FS(distFS)))

	http.HandleFunc("/api/payment", paymentHandler)

	fmt.Println("server running @port 4000")
	server.ListenAndServe()
}
