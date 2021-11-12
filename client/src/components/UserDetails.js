import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserDetails() {
  const [name, setName] = useState('dishu')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [redirectURL, setRedirectURL] = useState('')
  const [isRedirect, setIsRedirect] = useState(false)

  const formHandler = async (e) => {
    e.preventDefault()
    console.log(e)
    console.log(name, phone, email)

    try {
      const res = await axios.post('/api/payment', {
        name: name,
        email: email,
        phone: phone,
        amount: 60000,
      })
      const data = await res.data
      if (data) {
        setRedirectURL(data)
        setIsRedirect(true)
      }
    } catch (error) {
      console.log('Erorr;', error)
    }
  }

  useEffect(() => {
    if (isRedirect === true && redirectURL !== '') {
      window.location.href = redirectURL
    }
  }, [redirectURL, isRedirect])

  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <div className="shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <Link to="/cart">Back</Link>
      </div>
      <form onSubmit={formHandler}>
        <div className="my-2">
          <label>Name:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="my-2">
          <label>Email:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="my-2">
          <label>Phone number:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="bg-yellow-100 hover:bg-yellow-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Pay
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserDetails
