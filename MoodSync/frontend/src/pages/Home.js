import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>🎧 MoodSync</h1>
      <p>Play music according to your mood.</p>

      <div>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;



