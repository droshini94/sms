import "../css/plan.css";
import { useNavigate } from "react-router-dom";

function Plans() {

  const navigate = useNavigate();

  const choosePlan = (planName) => {
    alert(`${planName} Plan Selected Successfully!`);
    navigate("/payment");
  };

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

          <button
            className="plan-btn"
            onClick={() => choosePlan("Basic")}
          >
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

          <button
            className="plan-btn"
            onClick={() => choosePlan("Premium")}
          >
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

          <button
            className="plan-btn"
            onClick={() => choosePlan("Enterprise")}
          >
            Choose Plan
          </button>

        </div>

      </div>

    </div>
  );
}

export default Plans;