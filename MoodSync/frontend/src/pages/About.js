function About() {
  return (
    <div className="page">
      <h2>About MoodSync</h2>

      <p className="about-text">
        MoodSync is a web-based music recommendation mini-project built as part of the Web Technology syllabus.
        The purpose of this project is to provide songs based on the user’s selected mood.  
        The project uses React for the client-side, Node.js and Express.js for the server, and MongoDB to store user feedback and login details.
        The system demonstrates core syllabus concepts including authentication, routing, form handling, API communication, and basic database operations.
      </p>
    </div>
  );
}

export default About;

