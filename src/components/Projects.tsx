type Project = {
  title: string;
  description: string;
  tech: string;
};

const projects: Project[] = [
  {
    title: "American Sign Language to text using Computer Vision",
    description: "Developed a real-time computer vision system that recognizes ASL hand gestures from a live camera feed",
    tech: "Tech: Python, OpenC, NumPy, pyttsx3 Machine Learning"
  },
  {
    title: "Order Creation Website (Team Project)",
    description: "Collaborated with peers to design and implement a full-stack order management web app.Contributed to both backend development andfrontend UI, while actively supporting teammates andresolving blockers.",
    tech: "Tech: Vercel, React, Figma, Node.js, Python"

  },
  {
    title: "Events App",
    description: "Designed user-friendly mobile app interfaces for event planning and ticketing. Prioritized usability and user experience, applying feedback to refine designs.",
    tech: "Tech: React, Figma, Node.js, Python"

  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      {projects.map(p => (
        <div key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <small>{p.tech}</small>
        </div>
        ))}
    </section>
  );
}

// const card = {
//   background: "white",
//   padding: "16px",
//   marginBottom: "12px",
//   borderRadius: "8px"
// };
