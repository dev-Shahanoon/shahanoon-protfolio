import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import profilePhoto from "./assets/profile.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Shahanoon <span>K</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Shahanoon <span>K</span>
            </h1>

            <h2>
              BSc COMPUTER SCIENCE STUDENT
              <br />
              <strong>ASPIRING IT / SOFTWARE PROFESSIONAL</strong>
            </h2>

            <p className="hero-description">
              Computer Science undergraduate with practical experience in IT
              hardware support, system troubleshooting, and logistics
              operations. Passionate about technology, software development,
              and building practical digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View My Work <span>→</span>
              </a>

              <a
                href="/Shahanoon_K_Resume.pdf"
                className="button secondary"
                download
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-bottom">
              <div className="location">
                <span>⌖</span>
                Kozhikode, Kerala, India
              </div>

              <div className="social-links">
  <a
    href="https://www.linkedin.com/in/shahanoon-k"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
   href="https://github.com/dev-Shahanoon"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a href="mailto:shanusk5606@gmail.com">
    Email ↗
  </a>
</div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-top">
                <span>PROFILE</span>
                <span>01</span>
              </div>

              <div className="visual-initial">
                <img src={profilePhoto} alt="Shahanoon K" />
                </div>

              <div className="visual-info">
                <strong>Shahanoon K</strong>
                <span>Computer Science Student</span>
              </div>

              <div className="visual-line"></div>

              <div className="visual-tags">
                <span>IT Support</span>
                <span>Flutter</span>
                <span>Web</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>

            <h2>
              Building skills through <span>real experience.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a BSc Computer Science student interested in software,
                IT support, application development, and practical technology
                solutions.
              </p>

              <p>
                My learning journey combines academic knowledge with hands-on
                projects and real-world work experience. I enjoy understanding
                how systems work, solving technical problems, and creating
                useful applications.
              </p>

              <p>
                I am continuously improving my technical skills and looking
                for opportunities where I can learn, contribute, and grow as
                an IT professional.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-item">
                <span className="card-number">01</span>

                <div>
                  <h3>Computer Science</h3>
                  <p>BSc Computer Science Student</p>
                </div>
              </div>

              <div className="about-card-item">
                <span className="card-number">02</span>

                <div>
                  <h3>IT Support</h3>
                  <p>Hardware & system troubleshooting</p>
                </div>
              </div>

              <div className="about-card-item">
                <span className="card-number">03</span>

                <div>
                  <h3>Development</h3>
                  <p>Flutter, HTML5 & web technologies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY SKILLS</p>

            <h2>
              Tools & technologies I <span>work with.</span>
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">&lt;/&gt;</div>

              <h3>Programming</h3>

              <div className="skill-list">
                <span>Python</span>
                <span>JavaScript</span>
                <span>Dart</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">WEB</div>

              <h3>Web Development</h3>

              <div className="skill-list">
                <span>HTML5</span>
                <span>CSS</span>
                <span>React</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">APP</div>

              <h3>App Development</h3>

              <div className="skill-list">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Firestore</span>
                <span>Android</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">IT</div>

              <h3>IT Support</h3>

              <div className="skill-list">
                <span>Hardware Support</span>
                <span>Troubleshooting</span>
                <span>System Support</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">DEV</div>

              <h3>Development Tools</h3>

              <div className="skill-list">
                <span>VS Code</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Android Studio</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">+</div>

              <h3>Professional Skills</h3>

              <div className="skill-list">
                <span>Problem Solving</span>
                <span>Teamwork</span>
                <span>Communication</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience" id="experience">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>

            <h2>
              My <span>experience.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <div className="timeline-date">AUGUST 2025 — PRESENT</div>

                <h3>Hub Assistant</h3>

                <h4>Ekart Logistics</h4>

                <p>
                  Working in logistics operations with practical exposure to
                  system-based workflows, data handling, cash process
                  management, and day-to-day hub operations. This experience
                  has also strengthened my troubleshooting, communication, and
                  professional skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education" id="education">
          <div className="section-heading">
            <p className="eyebrow">EDUCATION</p>

            <h2>
              My academic <span>journey.</span>
            </h2>
          </div>

          <div className="education-card">
            <div className="education-year">2024 — 2027</div>

            <div>
              <h3>BSc Computer Science</h3>

              <h4>
                PEEKAY CICS Arts and Science College, Mathara
              </h4>

              <p>
                Building a strong foundation in computer science, programming,
                software development, information technology, and practical
                problem solving.
              </p>
            </div>
          </div>

          <div className="education-card education-secondary">
            <div className="education-year">2022 — 2024</div>

            <div>
              <h3>Higher Secondary | Computer Science</h3>

              <h4>UHHS Chaliyam</h4>

              <p>
                Developed a foundational understanding of computer science concepts, programming basics, and core sciences.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
  <div className="section-heading">
    <p className="eyebrow">MY PROJECTS</p>

    <h2>
      Things I've <span>built.</span>
    </h2>
  </div>

  <div className="projects-grid">

    {/* FRESHTRACK */}
    <article className="project-card featured">

      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-type">FLUTTER APP</span>
      </div>

      <h3>FreshTrack</h3>

      <p>
        A Flutter based food inventory application designed to help
        users manage food items, monitor expiry dates, receive
        expiry related alerts, and organize their inventory.
      </p>

      <div className="project-tech">
        <span>Flutter</span>
        <span>Dart</span>
        <span>Firebase</span>
        <span>Firestore</span>
      </div>

      <Link
        to="/freshtrack"
        className="project-link project-button"
      >
        View Project <span>↗</span>
      </Link>

    </article>


    {/* CODESTEP */}
    <article className="project-card">

      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-type">LEARNING APP</span>
      </div>

      <h3>CodeStep</h3>

      <p>
        A learning-focused Flutter application created to study
        Python and HTML through structured topics and coding
        exercises.
      </p>

      <div className="project-tech">
        <span>Flutter</span>
        <span>Dart</span>
        <span>Python</span>
        <span>HTML</span>
      </div>

      <a
        href="#contact"
        className="project-link"
      >
        View Project <span>↗</span>
      </a>

    </article>

  </div>
</section>
        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="contact-box">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Let's build something <span>great.</span>
            </h2>

            <p>
              I'm open to opportunities, collaborations, internships, and
              projects where I can learn, contribute, and grow.
            </p>

            <div className="contact-buttons">
  <a
    href="mailto:shanusk5606@gmail.com"
    className="button primary"
  >
    Email Me →
  </a>

  <a
    href="https://www.linkedin.com/in/shahanoon-k"
    className="button secondary"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
href="https://github.com/dev-Shahanoon"
    className="button secondary"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>
</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>
            Shahanoon <span>K</span>
          </strong>
        </div>

        <p>© 2026 Shahanoon K. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;