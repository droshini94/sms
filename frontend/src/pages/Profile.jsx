import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";

function Profile() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "D Roshini",
    email: "droshini94@gmail.com",
    phone: "+91 9876543210",
    dob: "",
    plan: "Premium",
    memberSince: "January 2026",
    address: "",
    password: "",
    confirmPassword: "",
    renewal: true,
    payment: true,
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      profile.password &&
      profile.password !== profile.confirmPassword
    ) {
      alert("Passwords do not match!");
      return;
    }

    alert("Profile Updated Successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Delete your account?")) {
      alert("Account Deleted");
      navigate("/");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      alert("Logged Out Successfully");
      navigate("/login");
    }
  };

  const handlePhoto = () => {
    alert("Change Photo feature coming soon.");
  };

  return (
    <div className="profile-page">

      {/* LEFT CARD */}

      <div className="profile-left">

        <img
          src="/profile.jpeg"
          alt="Profile"
          className="profile-img"
        />

        <h2>{profile.name}</h2>

        <p>{profile.plan} Member</p>

        <button
          className="photo-btn"
          onClick={handlePhoto}
        >
          📷 Change Photo
        </button>

        <div className="stats">

          <div>
            <h3>8</h3>
            <span>Months</span>
          </div>

          <div>
            <h3>15</h3>
            <span>Invoices</span>
          </div>

          <div>
            <h3>₹11,250</h3>
            <span>Spent</span>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* RIGHT SIDE */}

      <div className="profile-right">

        <h1>Account Details</h1>

        <form onSubmit={handleSave}>

          <div className="input-grid">

            <div>
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Mobile Number</label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={profile.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Current Plan</label>

              <input
                type="text"
                name="plan"
                value={profile.plan}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Member Since</label>

              <input
                type="text"
                name="memberSince"
                value={profile.memberSince}
                onChange={handleChange}
              />
            </div>

          </div>

          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter Address"
          ></textarea>

          <h2>Notification Settings</h2>

          <div className="checkboxes">

            <label>
              <input
                type="checkbox"
                name="renewal"
                checked={profile.renewal}
                onChange={handleChange}
              />
              Renewal Reminder
            </label>

            <label>
              <input
                type="checkbox"
                name="payment"
                checked={profile.payment}
                onChange={handleChange}
              />
              Payment Notifications
            </label>

            <label>
              <input
                type="checkbox"
                name="marketing"
                checked={profile.marketing}
                onChange={handleChange}
              />
              Marketing Emails
            </label>

          </div>

          <h2>Security</h2>

          <div className="input-grid">

            <div>

              <label>New Password</label>

              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />

            </div>

            <div>

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="button-group">

            <button
              type="submit"
              className="save-btn"
            >
              💾 Save Changes
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={handleDelete}
            >
              🗑 Delete Account
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Profile;