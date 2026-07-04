import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">SubscriptionPro</h2>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/register">Register</Link></li>

        <li><Link to="/login">Login</Link></li>

        <li><Link to="/dashboard">Dashboard</Link></li>

        <li><Link to="/plans">Plans</Link></li>

        <li><Link to="/payment">Payment</Link></li>

        <li><Link to="/profile">Profile</Link></li>

        <li><Link to="/about">About</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;