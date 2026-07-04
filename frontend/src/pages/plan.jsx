import "../css/plan.css";

function Plans() {
  return (
    <div className="plan-container">

      <h1>Subscription Plans</h1>

      <div className="plan-grid">

        <div className="plan-card">
          <h2>Basic</h2>
          <div className="price">₹499 / Month</div>

          <ul>
            <li>✔ 1 User</li>
            <li>✔ Email Support</li>
            <li>✔ Basic Dashboard</li>
          </ul>

          <button className="plan-btn">
            Choose Plan
          </button>
        </div>

        <div className="plan-card popular">
          <h2>Premium</h2>
          <div className="price">₹999 / Month</div>

          <ul>
            <li>✔ Unlimited Users</li>
            <li>✔ Priority Support</li>
            <li>✔ Analytics Dashboard</li>
          </ul>

          <button className="plan-btn">
            Choose Plan
          </button>
        </div>

        <div className="plan-card">
          <h2>Enterprise</h2>
          <div className="price">₹1999 / Month</div>

          <ul>
            <li>✔ Unlimited Users</li>
            <li>✔ Dedicated Manager</li>
            <li>✔ Premium Features</li>
          </ul>

          <button className="plan-btn">
            Choose Plan
          </button>
        </div>

      </div>

    </div>
  );
}

export default Plans;