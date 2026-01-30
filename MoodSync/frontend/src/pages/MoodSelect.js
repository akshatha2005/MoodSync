import { useNavigate } from "react-router-dom";

function MoodSelect() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Choose your mood</h2>

      <button className="button" onClick={() => navigate("/playlist/happy")}>Happy</button>
      <button className="button" onClick={() => navigate("/playlist/sad")}>Sad</button>
      <button className="button" onClick={() => navigate("/playlist/chill")}>Chill</button>
      <button className="button" onClick={() => navigate("/playlist/energetic")}>Energetic</button>
    </div>
  );
}

export default MoodSelect;


