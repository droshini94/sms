import "../css/home.css";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCreditCard,
  FaChartLine,
  FaBell,
  FaShieldAlt,
  FaHeadset
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <h1>Subscription Management System</h1>

          <p>
            Easily manage customer subscriptions, billing, payments,
            renewals, and analytics with one powerful platform.
          </p>

          <div className="buttons">

            <Link to="/register">
              <button className="btn">Get Started</button>
            </Link>

            <Link to="/plans">
              <button className="btn-outline">
                View Plans
              </button>
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920068.png"
            alt="Subscription"
          />

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaUsers className="icon" />
            <h3>User Management</h3>
            <p>Manage customer accounts and subscriptions easily.</p>
          </div>

          <div className="feature-card">
            <FaCreditCard className="icon" />
            <h3>Secure Payments</h3>
            <p>Fast and secure online payment system.</p>
          </div>

          <div className="feature-card">
            <FaBell className="icon" />
            <h3>Renewal Reminder</h3>
            <p>Automatic reminders before plan expiry.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="icon" />
            <h3>Analytics</h3>
            <p>Track subscriptions, revenue and growth.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="icon" />
            <h3>Data Security</h3>
            <p>Your customer information is always protected.</p>
          </div>

          <div className="feature-card">
            <FaHeadset className="icon" />
            <h3>24/7 Support</h3>
            <p>Professional customer support whenever needed.</p>
          </div>

        </div>

      </section>

     

      <section className="statistics">

        <div className="stat-box">
          <h1>1000+</h1>
          <p>Customers</p>
        </div>

        <div className="stat-box">
          <h1>5000+</h1>
          <p>Subscriptions</p>
        </div>

        <div className="stat-box">
          <h1>₹10L+</h1>
          <p>Revenue Generated</p>
        </div>

        <div className="stat-box">
          <h1>99%</h1>
          <p>Customer Satisfaction</p>
        </div>

      </section>


      <section className="why">

        <h2>Why Choose SubscriptionPro?</h2>

        <div className="why-grid">

          <div className="why-card">
            ✔ Easy Subscription Management
          </div>

          <div className="why-card">
            ✔ Secure Billing & Payments
          </div>

          <div className="why-card">
            ✔ Real-time Dashboard
          </div>

          <div className="why-card">
            ✔ Detailed Reports
          </div>

          <div className="why-card">
            ✔ Automatic Renewal Alerts
          </div>

          <div className="why-card">
            ✔ 24/7 Customer Support
          </div>

        </div>

      </section>


      <section className="cta">

        <h2>Ready to Manage Your Subscriptions?</h2>

        <p>
          Join thousands of businesses using SubscriptionPro.
        </p>

        <Link to="/register">
          <button className="cta-btn">
            Create Free Account
          </button>
        </Link>

      </section>

    </div>
  );
}

export default Home;