import React from "react";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src="/profile.jpg" alt="Profile" width="200px" />
      <p>My name is Kevin Assunção Rodrigues. I am a Software Engineering student.</p>
      <a href="/resume.pdf" download>Download My Resume</a>
    </div>
  );
}

export default About;
