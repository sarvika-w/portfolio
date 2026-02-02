type Props = {
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function Navbar({ dark, setDark }: Props) {
  return (
    <nav className="navbar">
      <h2>Sarvika Wanzare</h2>

      <div className="nav-right">
        <button onClick={() => setDark(!dark)} className="toggle">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        
      </div>
    </nav>
  );
}
