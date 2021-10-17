package main

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/razorpay/razorpay-go"
)

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

	http.Handle("/", http.FileServer(http.Dir("client/build/")))
	http.HandleFunc("/api/payment", paymentHandler)

	fmt.Println("server running @port 4000")
	server.ListenAndServe()
}
