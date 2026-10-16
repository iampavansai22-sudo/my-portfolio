
import { useState } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Responsive Design",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    description:
      "A shopping interface with product cards, search, category filters, and a cart.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://example.com",
    github: "https://github.com/your-username/ecommerce-project",
  },
  {
    number: "02",
    title: "Task Manager",
    description:
      "A task management app to add, complete, and delete daily tasks.",
    tech: ["React", "CSS", "Local Storage"],
    demo: "https://example.com",
    github: "https://github.com/your-username/task-manager",
  },
  {
    number: "03",
    title: "Weather Dashboard",
    description:
      "A weather app interface for displaying current conditions and forecasts.",
    tech: ["React", "API", "CSS"],
    demo: "https://example.com",
    github: "https://github.com/your-username/weather-app",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu}>
            Pavan<span>Portfolio.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              PAVAN 
              <br />
              <span>Frontend Developer.</span>
            </h1>

            <p className="hero-description">
              I build clean, responsive, and user-friendly websites
              using modern web technologies. I'm passionate about
              learning and turning ideas into real web experiences.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Work ↗
              </a>
              <a className="button button-outline" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot"></span>
              Open to frontend developer opportunities
            </div>
          </div>

          <div className="hero-art" aria-label="Developer illustration">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="code-card">
              <div className="code-card-top">
                <span></span><span></span><span></span>
                <small>developer.jsx</small>
              </div>

              <pre>
                <code>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                  {"\n"}  name: <span className="code-green">"Your Name"</span>,
                  {"\n"}  role: <span className="code-green">"Frontend Dev"</span>,
                  {"\n"}  skills: [<span className="code-green">"React"</span>],
                  {"\n"}  learning: <span className="code-green">"Every day"</span>
                  {"\n"}{"}"};
                  {"\n\n"}
                  <span className="code-purple">function</span>{" "}
                  <span className="code-blue">build</span>() {"{"}
                  {"\n"}  <span className="code-purple">return</span>{" "}
                  <span className="code-green">"Great websites!"</span>;
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>

            <div className="floating-tag tag-top">{"</>"} React.js</div>
            <div className="floating-tag tag-bottom">{"{ }"} JavaScript</div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Building for the <span>web.</span></h2>
          </div>

          <div className="about-content">
            <p>
              I'm an aspiring frontend developer who enjoys creating
              websites that look great and work smoothly on every
              screen. I have a foundation in HTML, CSS, and JavaScript,
              and I'm developing my skills with React.
            </p>
            <p>
              My goal is to write maintainable code, solve real
              problems, and contribute to a great development team.
              I'm currently building projects to strengthen my skills.
            </p>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHAT I WORK WITH</p>
              <h2>My <span>skills.</span></h2>
              <p className="section-description">
                Technologies I'm learning and using to create web experiences.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{skill}</h3>
                  <span className="skill-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I've <span>built.</span></h2>
            <p className="section-description">
              A few examples of the kind of applications I want to create.
              Replace these examples with your real projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Source Code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-content">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have a project or opportunity?</h2>
            <p>
              I'm interested in junior frontend roles, internships,
              and opportunities to learn and contribute.
            </p>

            <a
              className="button button-primary"
              href="mailto:your.email@example.com"
            >
              Say Hello ↗
            </a>

            <div className="social-links">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a className="logo" href="#home">
            Sai<span>Portfolio.</span>
          </a>
          <p>Designed and built with React.js</p>
          <p>© {new Date().getFullYear()} pavan sai</p>
        </div>
      </footer>
    </>
  );
}

export default App;
