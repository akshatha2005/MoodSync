import { useNavigate } from "react-router-dom";

function Settings() {
  const go = useNavigate();

  function logout() {
    localStorage.clear();
    alert("Logged out");
    go("/");
  }

  return (
    <div className="page">
      <h2>Settings</h2>
      <button className="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Settings;



