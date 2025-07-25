import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/User";
import UserContext from "../context/UserContext";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "", // ✅ Use lowercase for consistency with backend
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(formData); // Sends request via your auth.js login function
      setUser(true); // Activates context
      navigate("/home"); // Redirect on success
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container login-wrapper">
      <div className="grid-column-full">
        <div className="login-header">
          <Link to="/" className="back-button">
            &larr; Back
          </Link>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Welcome Back</h2>

          <div className="form-item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>

          <div className="oauth-section"></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
