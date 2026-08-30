import { useEffect } from "react";
import "./FreshTrack.css";
import { Link } from "react-router-dom";

function FreshTrack() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="freshtrack-page">

      {/* HEADER */}
      <header className="freshtrack-header">
        <Link to="/" className="back-button">
  ← Back to Portfolio
</Link>

        <span className="private-badge">
          🔒 Private Repository
        </span>
      </header>

      <main>

        {/* HERO */}
        <section className="freshtrack-hero">
          <div className="freshtrack-label">
            FLUTTER PROJECT · 01
          </div>

          <h1>
            Fresh<span>Track</span>
          </h1>

          <p className="freshtrack-subtitle">
            Smart Food Inventory & Expiry Management
          </p>

          <p className="freshtrack-intro">
            FreshTrack is a Flutter-based food inventory application
            designed to help users manage food items, monitor expiry
            dates, and organize their inventory through a simple
            digital interface.
          </p>

          <div className="freshtrack-tech">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Firebase</span>
            <span>Firestore</span>
          </div>
        </section>


        {/* OVERVIEW */}
        <section className="freshtrack-section">
          <div className="freshtrack-section-title">
            <span>01</span>
            <h2>Project Overview</h2>
          </div>

          <div className="freshtrack-overview">
            <div>
              <p>
                FreshTrack was created as a practical application
                project to explore mobile app development with Flutter
                and backend data management using Firebase.
              </p>

              <p>
                The application focuses on helping users keep track of
                food items, their categories, and expiry dates while
                providing useful information through a clean dashboard.
              </p>
            </div>

            <div className="overview-card">
              <div>
                <span>PROJECT</span>
                <strong>FreshTrack</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Mobile Application</strong>
              </div>

              <div>
                <span>PLATFORM</span>
                <strong>Android</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Developed</strong>
              </div>
            </div>
          </div>
        </section>


        {/* FEATURES */}
        <section className="freshtrack-section">
          <div className="freshtrack-section-title">
            <span>02</span>
            <h2>Key Features</h2>
          </div>

          <div className="freshtrack-features">

            <article className="feature-card">
              <span>01</span>
              <h3>Food Inventory</h3>
              <p>
                Add and manage food items in a centralized inventory.
              </p>
            </article>

            <article className="feature-card">
              <span>02</span>
              <h3>Expiry Tracking</h3>
              <p>
                Monitor expiry dates and identify food items that need
                attention.
              </p>
            </article>

            <article className="feature-card">
              <span>03</span>
              <h3>Expiry Alerts</h3>
              <p>
                Helps users stay aware of food items approaching or
                passing their expiry dates.
              </p>
            </article>

            <article className="feature-card">
              <span>04</span>
              <h3>Dashboard</h3>
              <p>
                Provides an organized overview of inventory and expiry
                information.
              </p>
            </article>

            <article className="feature-card">
              <span>05</span>
              <h3>Cloud Data</h3>
              <p>
                Uses Firebase and Firestore for application data
                management.
              </p>
            </article>

            <article className="feature-card">
              <span>06</span>
              <h3>Mobile First</h3>
              <p>
                Designed as a practical mobile application using
                Flutter.
              </p>
            </article>

          </div>
        </section>


        {/* TECHNOLOGY */}
        <section className="freshtrack-section">
          <div className="freshtrack-section-title">
            <span>03</span>
            <h2>Technology Stack</h2>
          </div>

          <div className="technology-grid">

            <div className="technology-card">
              <strong>Flutter</strong>
              <span>Application Framework</span>
            </div>

            <div className="technology-card">
              <strong>Dart</strong>
              <span>Programming Language</span>
            </div>

            <div className="technology-card">
              <strong>Firebase</strong>
              <span>Backend Platform</span>
            </div>

            <div className="technology-card">
              <strong>Firestore</strong>
              <span>Cloud Database</span>
            </div>

          </div>
        </section>


        {/* DEVELOPMENT */}
        <section className="freshtrack-section">
          <div className="freshtrack-section-title">
            <span>04</span>
            <h2>What I Worked On</h2>
          </div>

          <div className="development-list">

            <div>
              <span>01</span>
              <p>
                Designed and developed the mobile application interface
                using Flutter.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Implemented food inventory management functionality.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Added expiry-date based organization and status
                handling.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Integrated Firebase and Firestore for application data.
              </p>
            </div>

            <div>
              <span>05</span>
              <p>
                Worked on a practical mobile solution focused on
                everyday food management.
              </p>
            </div>

          </div>
        </section>


        {/* SOURCE CODE */}
        <section className="freshtrack-source">

          <div>
            <span className="freshtrack-label">
              SOURCE CODE
            </span>

            <h2>
              Built with code.
              <br />
              <span>Kept private.</span>
            </h2>

            <p>
              The FreshTrack source code is currently maintained in a
              private GitHub repository.
            </p>
          </div>

          <div className="private-repository">
            <span className="lock-icon">🔒</span>

            <strong>Private Repository</strong>

            <small>
              Source code is not publicly available.
            </small>
          </div>

        </section>


        {/* BACK */}
        <section className="freshtrack-final">
          <Link to="/" className="back-button large">
  ← Back to Portfolio
</Link>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="freshtrack-footer">
        <strong>
          Shahanoon <span>K</span>
        </strong>

        <p>
          © 2026 Shahanoon K
        </p>
      </footer>

    </div>
  );
}

export default FreshTrack;