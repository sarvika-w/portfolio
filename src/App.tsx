import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hobbies from "./components/hobbies";

function App() {
  const [dark, setDark] = useState(false); // default = LIGHT

  useEffect(() => {
    document.body.className = dark ? "theme-dark" : "theme-light";
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Hobbies />
      <Contact />
      
    </>
  );
}
export default App;

