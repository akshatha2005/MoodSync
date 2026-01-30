import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;
  const hide = ["/", "/login", "/register"];

  if (hide.includes(path)) return null;

  return (
    <div className="navbar">
      <Link to="/mood">Mood</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/team">Team</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Navbar;
