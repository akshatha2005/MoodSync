import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const go = useNavigate();

  async function handleRegister() {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    const res = await axios.post("http://localhost:5000/register", {
      name,
      email,
      password
    });

    alert(res.data.message);
    if (res.data.message === "Registered") {
      go("/login");
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Register</h2>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;



