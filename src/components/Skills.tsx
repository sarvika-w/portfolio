const skills: string[] = [
  "Java",
  "C",
  "Python",
  "TypeScript",
  "React",
  "Git",
  "Algorithms",
  "Data Structures"
];

export default function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>

      <div className="skills-container">
        {skills.map(skill => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
