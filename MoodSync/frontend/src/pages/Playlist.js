import { useParams } from "react-router-dom";
import { useState } from "react";

function Playlist() {
  const { mood } = useParams();
  const [currentSong, setCurrentSong] = useState("");

  const songs = {
    happy: [
      { name: "Happy Vibes", url: "/songs/happy1.mp3" },
      { name: "Sunshine Mood", url: "/songs/happy2.mp3" }
    ],
    sad: [
      { name: "Rainy Thoughts", url: "/songs/sad1.mp3" },
      { name: "Soft Piano", url: "/songs/sad2.mp3" }
    ],
    chill: [
      { name: "LoFi Chill", url: "/songs/calm1.mp3" },
      { name: "Ocean Piano", url: "/songs/calm2.mp3" }
    ],
    energetic: [
      { name: "Hype Beat", url: "/songs/energetic1.mp3" },
      { name: "Workout Mode", url: "/songs/energetic2.mp3" }
    ]
  };

  const list = songs[mood] || [];

  return (
    <div className="page">
      <h2>{mood.toUpperCase()} Playlist 🎵</h2>

      <select onChange={(e) => setCurrentSong(e.target.value)}>
        <option>Select a song</option>
        {list.map((song, i) => (
          <option key={i} value={song.url}>
            {song.name}
          </option>
        ))}
      </select>

      {currentSong && (
        <div style={{ marginTop: "20px" }}>
          <audio controls autoPlay src={currentSong} />
        </div>
      )}
    </div>
  );
}

export default Playlist;



