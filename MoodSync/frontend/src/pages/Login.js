import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const go = useNavigate();

  async function handleLogin() {
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    const res = await axios.post("http://localhost:5000/login", {
      email,
      password
    });

    if (res.data.message === "Success") {
      localStorage.setItem("user", res.data.name);
      localStorage.setItem("email", res.data.email);
      go("/mood");
    } else {
      alert(res.data.message);
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;


