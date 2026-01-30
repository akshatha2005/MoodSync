import { useState } from "react";
import axios from "axios";

function Feedback() {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const email = localStorage.getItem("email");

  async function sendFeedback(e) {
    e.preventDefault();
    if (!text) {
      alert("Write something");
      return;
    }

    const res = await axios.post("http://localhost:5000/feedback", {
      email,
      message: text
    });

    setMsg(res.data.message);
    setText("");
  }

  return (
    <div className="page">
      <h2>Feedback</h2>
      <form onSubmit={sendFeedback}>
        <textarea
          rows="4"
          cols="35"
          placeholder="Write your feedback..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Feedback;

