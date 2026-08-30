import { useEffect } from "react";
import "./App.css";

function FreshTrack() {
  useEffect(() => {
    // Always open FreshTrack at the top
    window.scrollTo(0, 0);
  }, []);

  const goBackToPortfolio = () => {
    // Go directly to the portfolio homepage
    window.location.assign("/");
  };

  return (
    <div className="portfolio freshtrack-page">

      {/* NAVBAR */}
      <header className="navbar">

        <button
          type="button"
          className="logo"
          onClick={goBackToPortfolio}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Shahanoon <span>K</span>
        </button>

        <button
          type="button"
          className="button secondary"
          onClick={goBackToPortfolio}
        >
          ← Back to Portfolio
        </button>

      </header>


      <main>

        {/* PROJECT HERO */}
        <section className="section project-detail">

          <div className="project-detail-header">

            <p className="eyebrow">
              PROJECT 01 • FLUTTER APPLICATION
            </p>

            <h1>
              Fresh<span>Track</span>
            </h1>

            <p className="project-detail-intro">
              A smart food inventory management application designed
              to help users organize food items, monitor expiry dates,
              and manage their food inventory more efficiently.
            </p>

            <div className="project-tech">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Firebase</span>
              <span>Firestore</span>
            </div>

          </div>


          {/* SCREENSHOT PLACEHOLDER */}
          <div className="freshtrack-showcase">

            <div className="freshtrack-placeholder">

              <div className="placeholder-content">

                <div className="placeholder-icon">
                  📱
                </div>

                <h3>
                  FreshTrack App Preview
                </h3>

                <p>
                  Your actual FreshTrack screenshots will be
                  added here later.
                </p>

                <span>
                  SCREENSHOT PLACEHOLDER
                </span>

              </div>

            </div>

          </div>


          {/* OVERVIEW */}
          <section className="project-detail-section">

            <p className="eyebrow">
              OVERVIEW
            </p>

            <h2>
              Managing food inventory,
              <span> made simpler.</span>
            </h2>

            <p className="detail-text">
              FreshTrack is a Flutter-based mobile application created
              to provide a simple and practical way to organize food
              inventory and monitor expiry dates.
            </p>

            <p className="detail-text">
              The application focuses on helping users understand the
              current state of their food inventory through a clean
              dashboard and organized information.
            </p>

          </section>


          {/* FEATURES */}
          <section className="project-detail-section">

            <p className="eyebrow">
              KEY FEATURES
            </p>

            <h2>
              What FreshTrack <span>can do.</span>
            </h2>

            <div className="feature-grid">

              <div className="feature-item">
                <span>01</span>
                <div>
                  <h3>Food Inventory</h3>
                  <p>
                    Add and manage food items in an organized inventory.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>02</span>
                <div>
                  <h3>Expiry Tracking</h3>
                  <p>
                    Monitor food expiry dates and identify items that
                    need attention.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>03</span>
                <div>
                  <h3>Expiry Status</h3>
                  <p>
                    Quickly understand whether food items are fresh,
                    expiring, or expired.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>04</span>
                <div>
                  <h3>Alerts</h3>
                  <p>
                    Keep track of approaching expiry dates through
                    expiry-related alerts.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>05</span>
                <div>
                  <h3>Edit & Delete</h3>
                  <p>
                    Update or remove food items whenever necessary.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <span>06</span>
                <div>
                  <h3>Cloud Database</h3>
                  <p>
                    Store application data using Firebase Firestore.
                  </p>
                </div>
              </div>

            </div>

          </section>


          {/* TECHNOLOGY */}
          <section className="project-detail-section">

            <p className="eyebrow">
              TECHNOLOGY
            </p>

            <h2>
              Built with <span>modern tools.</span>
            </h2>

            <div className="technology-grid">

              <div className="technology-card">
                <strong>Flutter</strong>
                <p>
                  Cross-platform mobile application development.
                </p>
              </div>

              <div className="technology-card">
                <strong>Dart</strong>
                <p>
                  Programming language used to build the application.
                </p>
              </div>

              <div className="technology-card">
                <strong>Firebase</strong>
                <p>
                  Backend services and application integration.
                </p>
              </div>

              <div className="technology-card">
                <strong>Firestore</strong>
                <p>
                  Cloud database used for application data.
                </p>
              </div>

            </div>

          </section>


          {/* DEVELOPMENT */}
          <section className="project-detail-section">

            <p className="eyebrow">
              DEVELOPMENT
            </p>

            <h2>
              What I <span>worked on.</span>
            </h2>

            <div className="development-content">

              <p>
                The project involved designing the application
                interface, creating multiple screens, implementing
                food inventory functionality, and connecting the
                application with Firebase services.
              </p>

              <p>
                The application was designed with a focus on simple
                navigation, organized information, and an easy-to-use
                mobile experience.
              </p>

            </div>

          </section>


          {/* LEARNING */}
          <section className="project-detail-section">

            <p className="eyebrow">
              LEARNING
            </p>

            <h2>
              What I learned <span>from this project.</span>
            </h2>

            <div className="learning-list">

              <div>
                <span>01</span>
                <p>
                  Building structured Flutter applications with
                  reusable components.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Working with Firebase and cloud-based application
                  data.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Designing clean and responsive mobile interfaces.
                </p>
              </div>

              <div>
                <span>04</span>
                <p>
                  Converting a real-world problem into a practical
                  software solution.
                </p>
              </div>

            </div>

          </section>


          {/* PROJECT STATUS */}
          <section className="project-status">

            <div>
              <span>PROJECT STATUS</span>
              <strong>
                Completed / Ongoing Improvements
              </strong>
            </div>

            <button
              type="button"
              className="button primary"
              onClick={goBackToPortfolio}
            >
              ← Back to Portfolio
            </button>

          </section>


          {/* FINAL BUTTON */}
          <div className="project-detail-footer">

            <button
              type="button"
              className="button secondary"
              onClick={goBackToPortfolio}
            >
              ← Return to Portfolio
            </button>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <strong>
          Shahanoon <span>K</span>
        </strong>

        <p>
          © 2026 Shahanoon K. All rights reserved.
        </p>

        <button
          type="button"
          onClick={goBackToPortfolio}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Back to Portfolio ↑
        </button>

      </footer>

    </div>
  );
}

export default FreshTrack;