import "../css/about.css";
import {
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaCreditCard,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

function About() {
  return (
    <div className="about">

     

      <section className="about-hero">

        <h1>About SubscriptionPro</h1>

        <p>
          SubscriptionPro is a modern Subscription Management System that helps
          businesses manage subscriptions, payments, renewals, customers,
          and billing from one powerful dashboard.
        </p>

      </section>

   

      <section className="about-content">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            Our platform is designed to simplify subscription management for
            businesses of every size. From managing customers to secure online
            payments and renewal reminders, SubscriptionPro provides everything
            you need in one place.
          </p>

          <p>
            We focus on automation, security, and ease of use so businesses can
            spend less time managing subscriptions and more time growing.
          </p>

        </div>

      </section>

      <section className="about-features">

        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaUsers className="icon"/>
            <h3>Customer Management</h3>
            <p>Manage customers with ease.</p>
          </div>

          <div className="feature-card">
            <FaCreditCard className="icon"/>
            <h3>Secure Payments</h3>
            <p>Fast and secure online billing.</p>
          </div>

          <div className="feature-card">
            <FaChartLine className="icon"/>
            <h3>Analytics</h3>
            <p>Track subscriptions and revenue.</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="icon"/>
            <h3>Data Security</h3>
            <p>Enterprise-grade protection.</p>
          </div>

          <div className="feature-card">
            <FaHeadset className="icon"/>
            <h3>24/7 Support</h3>
            <p>Always available to help you.</p>
          </div>

          <div className="feature-card">
            <FaCheckCircle className="icon"/>
            <h3>Automatic Renewals</h3>
            <p>Never miss a subscription renewal.</p>
          </div>

        </div>

      </section>

     

      <section className="mission">

        <h2>Our Mission</h2>

        <p>
          To provide businesses with an easy-to-use, secure, and intelligent
          subscription management platform that improves customer experience
          and increases business growth.
        </p>

      </section>

    </div>
  );
}

export default About;