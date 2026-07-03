import "../dash.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Users</h3>
          <h2>100</h2>
        </div>

        <div className="card">
          <h3>Active Plans</h3>
          <h2>3</h2>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <h2>₹50,000</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;