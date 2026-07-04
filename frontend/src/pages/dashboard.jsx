import "../css/Dash.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="logout-btn">Logout</button>
      </div>

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
          <h3>Total Revenue</h3>
          <h2>₹50,000</h2>
        </div>

      </div>

      <div className="table-section">

        <h2>Recent Subscriptions</h2>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Roshini</td>
              <td>Premium</td>
              <td>Active</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>John</td>
              <td>Basic</td>
              <td>Expired</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;