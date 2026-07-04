import "../css/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">

        <img
          src="/profile.jpeg"
          alt="Profile"
          className="profile-image"
        />

        <h2>Roshini D</h2>

        <p><strong>Email:</strong> roshini@gmail.com</p>

        <p><strong>Phone:</strong> 9876543210</p>

        <p><strong>Plan:</strong> Premium</p>

        <div className="profile-buttons">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn">Logout</button>
        </div>

      </div>
    </div>
  );
}

export default Profile;