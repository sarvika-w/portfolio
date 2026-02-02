import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Programmer",
  "Web Designer",
  "Learner",
  "Leader", 
 "Software Engineer",
  "Problem Solver",
  "Team Player",
  "Innovator",
  "Creative Thinker",
  "UX Designer",
  "Software Engineer",
  "Critical Thinker",
  "Collaborator"
];

export default function About() {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Type one character at a time
      setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
      if (charIndex < roles[roleIndex].length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        // pause then erase after 1.5s
        setTimeout(() => {
          setCurrentRole("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src="/me.jpg" alt="Sarvika" className="about-pic" />

        <div className="about-text">
          <h1>
            Hello, I am Sarvika Wanzare and I'm a <span className="typing">{currentRole}</span>.
          </h1>

          <p>
            I am a Software Engineering student at UNSW, passionate about
            building scalable applications, solving challenging problems, and
            crafting elegant, interactive web experiences. I love exploring
            modern web technologies and turning ideas into reality!
          </p>

          <a href="/resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
