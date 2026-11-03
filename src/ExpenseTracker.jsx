
import { useEffect } from "react";
import "./ExpenseTracker.css";
import { Link } from "react-router-dom";

function ExpenseTracker() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="expense-page">

      {/* HEADER */}
      <header className="expense-header">
        <Link to="/" className="back-button">
          ← Back to Portfolio
        </Link>

        <span className="expense-badge">
          ✓ Completed Project
        </span>
      </header>

      <main>

        {/* HERO */}
        <section className="expense-hero">
          <div className="expense-label">
            FLUTTER PROJECT · 03
          </div>

          <h1>
            Expense<span>Tracker</span>
          </h1>

          <p className="expense-subtitle">
            Personal Finance & Expense Management
          </p>

          <p className="expense-intro">
            Expense Tracker is a Flutter-based personal finance
            application designed to help users manage multiple
            accounts, record transactions, monitor balances, and
            understand their financial activity through a clear
            dashboard and analytics.
          </p>

          <div className="expense-tech">
            <span>Flutter</span>
            <span>Dart</span>
            <span>Hive</span>
            <span>Local Storage</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="expense-section">
          <div className="expense-section-title">
            <span>01</span>
            <h2>Project Overview</h2>
          </div>

          <div className="expense-overview">
            <div>
              <p>
                Expense Tracker was developed as a practical
                personal finance application using Flutter and Dart.
                It focuses on making everyday money management
                easier through organized account and transaction
                tracking.
              </p>

              <p>
                Users can manage multiple accounts, record income,
                expenses and transfers, check account balances,
                and review their financial activity from a
                centralized dashboard.
              </p>
            </div>

            <div className="expense-overview-card">
              <div>
                <span>PROJECT</span>
                <strong>Expense Tracker</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Personal Finance App</strong>
              </div>

              <div>
                <span>PLATFORM</span>
                <strong>Android</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Completed</strong>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="expense-section">
          <div className="expense-section-title">
            <span>02</span>
            <h2>Key Features</h2>
          </div>

          <div className="expense-features">

            <article className="expense-feature-card">
              <span>01</span>
              <h3>Multiple Accounts</h3>
              <p>
                Create and manage multiple financial accounts
                in one application.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>02</span>
              <h3>Transaction Management</h3>
              <p>
                Record and organize income, expenses and
                account transfers.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>03</span>
              <h3>Balance Tracking</h3>
              <p>
                Monitor individual account balances and
                overall available balances.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>04</span>
              <h3>Financial Analytics</h3>
              <p>
                Review income, expenses and spending patterns
                through analytics.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>05</span>
              <h3>Credit Card Tracking</h3>
              <p>
                Monitor credit card outstanding amounts
                and available credit.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>06</span>
              <h3>Transaction History</h3>
              <p>
                View previous transactions and organize
                records using filters.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>07</span>
              <h3>Dark Theme</h3>
              <p>
                Use a consistent dark interface throughout
                the application.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>08</span>
              <h3>Local Data Storage</h3>
              <p>
                Store account and transaction information
                locally using Hive.
              </p>
            </article>

            <article className="expense-feature-card">
              <span>09</span>
              <h3>Financial Dashboard</h3>
              <p>
                Get a centralized overview of accounts,
                balances and financial activity.
              </p>
            </article>

          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="expense-section">
          <div className="expense-section-title">
            <span>03</span>
            <h2>Technology Stack</h2>
          </div>

          <div className="expense-technology-grid">

            <div className="expense-technology-card">
              <strong>Flutter</strong>
              <span>Application Framework</span>
            </div>

            <div className="expense-technology-card">
              <strong>Dart</strong>
              <span>Programming Language</span>
            </div>

            <div className="expense-technology-card">
              <strong>Hive</strong>
              <span>Local Database</span>
            </div>

            <div className="expense-technology-card">
              <strong>Material Design</strong>
              <span>User Interface</span>
            </div>

          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="expense-section">
          <div className="expense-section-title">
            <span>04</span>
            <h2>What I Worked On</h2>
          </div>

          <div className="expense-development-list">

            <div>
              <span>01</span>
              <p>
                Designed and developed the application interface
                using Flutter and Dart.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Implemented multiple account management and
                balance tracking.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Developed income, expense and transfer
                transaction functionality.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Integrated Hive for local storage of
                accounts and transactions.
              </p>
            </div>

            <div>
              <span>05</span>
              <p>
                Implemented financial analytics, transaction
                history and credit card tracking.
              </p>
            </div>

          </div>
        </section>

        {/* SOURCE CODE */}
        <section className="expense-source">

          <div>
            <span className="expense-label">
              SOURCE CODE
            </span>

            <h2>
              Built with code.
              <br />
              <span>Open on GitHub.</span>
            </h2>

            <p>
              Explore the Expense Tracker project and its
              source code on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/dev-Shahanoon/expense_tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="expense-github"
          >
            <span>↗</span>
            <strong>View on GitHub</strong>
            <small>Explore the source code</small>
          </a>

        </section>

        {/* BACK */}
        <section className="expense-final">
          <Link to="/" className="back-button large">
            ← Back to Portfolio
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="expense-footer">
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

export default ExpenseTracker;
