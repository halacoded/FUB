import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../api/User";
import UserContext from "../context/UserContext";
import "../styles/LoginPage.css";

const businessOptions = ["home-kitchen", "restaurant", "cloud"];

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    businessType: "home-kitchen",
    password: "",
    confirmPassword: "",
    location: "",
    logoUrl: "",
    specialties: [],
  });

  const [specialtyInput, setSpecialtyInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSpecialtyAdd = () => {
    if (
      specialtyInput.trim() &&
      !formData.specialties.includes(specialtyInput.trim())
    ) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, specialtyInput.trim()],
      });
      setSpecialtyInput("");
    }
  };

  const handleSpecialtyRemove = (specialtyToRemove) => {
    setFormData({
      ...formData,
      specialties: formData.specialties.filter((s) => s !== specialtyToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const payload = {
      username: formData.username.trim(),
      phone: formData.phone.trim(),
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      businessType: formData.businessType,
      location: formData.location.trim(),
      logoUrl: formData.logoUrl.trim(),
      specialties: formData.specialties,
    };

    try {
      const response = await signup(payload);
      setUser(response.user);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
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
          <h2 className="login-title">Create Your Account</h2>

          <div className="form-item">
            <label htmlFor="username">Username*</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>

          <div className="form-item">
            <label htmlFor="phone">Phone Number*</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[+]{0,1}[0-9]{7,15}"
              title="Phone number should be between 7-15 digits with optional + prefix"
            />
          </div>

          <div className="form-item">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-item">
            <label htmlFor="businessType">Business Type*</label>
            <select
              id="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            >
              {businessOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type.charAt(0).toUpperCase() +
                    type.slice(1).replace("-", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="logoUrl">Logo URL</label>
            <input
              id="logoUrl"
              type="url"
              value={formData.logoUrl}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
            />
          </div>

          <div className="form-item">
            <label>Specialties</label>
            <div className="specialties-input">
              <input
                type="text"
                value={specialtyInput}
                onChange={(e) => setSpecialtyInput(e.target.value)}
                placeholder="Add specialty"
                onKeyPress={(e) => e.key === "Enter" && handleSpecialtyAdd()}
              />
              <button
                type="button"
                className="btn btn-small"
                onClick={handleSpecialtyAdd}
              >
                Add
              </button>
            </div>
            {formData.specialties.length > 0 && (
              <div className="specialties-list">
                {formData.specialties.map((specialty, index) => (
                  <span key={index} className="specialty-tag">
                    {specialty}
                    <button
                      type="button"
                      onClick={() => handleSpecialtyRemove(specialty)}
                      className="specialty-remove"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="form-item">
            <label htmlFor="password">Password*</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <div className="form-item">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
