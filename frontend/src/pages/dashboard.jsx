import { useState } from "react";
import "../css/Dash.css";

function Dashboard() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Roshini",
      plan: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "John",
      plan: "Basic",
      status: "Expired",
    },
  ]);


  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

 
  const handleEdit = (id) => {
    const newName = prompt("Enter new user name:");

    if (!newName) return;

    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, name: newName }
          : user
      )
    );
  };

  return (
    <div className="dashboard">

     

      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>

   

      <div className="cards">

        <div className="card">
          <h3>Total Users</h3>
          <h2>{users.length}</h2>
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

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.plan}</td>

                <td>{user.status}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;