import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../css/register.css";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();


        if (user.password !== user.confirmPassword) {
            alert("❌ Passwords do not match");
            return;
        }

        try {

            const response = await API.post("/auth/register", {
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password
            });

            alert(response.data.message);

            // Clear form
            setUser({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }
    };

    return (

        <div className="register-container">

            <form className="register-form" onSubmit={handleSubmit}>

                <h2>Create Account</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Register
                </button>

                <p style={{ textAlign: "center", marginTop: "15px" }}>
                    Already have an account?{" "}
                    <span
                        style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>

            </form>

        </div>

    );
}

export default Register;