import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div className="m-4 py-4 px-12">
      <div className="font-bold text-3xl">Cart items</div>
      <ul className="my-4">
        <li>
          <div className="flex justify-between">
            <div>No.</div>
            <div>Item</div>
            <div>Count</div>
            <div>Cost</div>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <div>1)</div>
            <div>IPhone</div>
            <div>1</div>
            <div>60000</div>
          </div>
        </li>
      </ul>
      <Link
        to="/user"
        className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600"
      >
        Pay
      </Link>
    </div>
  )
}

export default Cart
