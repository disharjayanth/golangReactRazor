import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <Router>
      <div className="flex justify-end m-3 py-4 px-10 text-lg">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="mx-2">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/user">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
