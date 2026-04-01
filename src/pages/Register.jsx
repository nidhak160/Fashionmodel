import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(formData);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful!");
  navigate("/login");
};

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f3"
    }}>

      <div style={{
        width: "350px",
        background: "white",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>

        <h2 style={{ marginBottom: "25px" }}>Register</h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              background: "black",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
              fontWeight: "bold"
            }}
          >
            REGISTER
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;