export default function Education() {
  return (
    <section id="education">
      <h1>Education</h1>

      <div className="card education-card">
        <h3>Bachelor of Software Engineering (Honours)</h3>
        <p>
          <strong>University of New South Wales (UNSW)</strong>
        </p>
        <p>2023 - Present</p>

        <ul>
          <li>Core focus on Data Structures, Algorithms, Software Design</li>
          <li>Experience with Java, C, Python, React, TypeScript</li>
        </ul>
      </div>

      <div className="card education-card">
        <h3>High School</h3>
        <p>
          <strong>Gems Modern Academy, Dubai</strong>
        </p>
        <p>Graduated: 2023</p>
        <p>
          <strong>ISC:</strong> <span className="ATAR">95 / 100</span>
        </p>
      </div>
    </section>
  );
}
