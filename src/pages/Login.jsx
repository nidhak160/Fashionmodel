import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleLogin = (e) => {
  e.preventDefault();

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const defaultUser = {
    email: "admin@gmail.com",
    password: "123456"
  };

  
  const users = [defaultUser, ...storedUsers];

  const foundUser = users.find(
    (u) =>
      u.email === email.trim() &&
      u.password === password.trim()
  );

  if (foundUser) {
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));

   
    window.dispatchEvent(new Event("userChanged"));

    navigate("/");
  } else {
    alert("Invalid Email or Password");
  }
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

        <h2 style={{ marginBottom: "25px" }}>Login</h2>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
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
            LOGIN
          </button>

        </form>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "black", fontWeight: "bold" }}>
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;