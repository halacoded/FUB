import NavBar from "../components/NavBar";
import "../index.css";
import JAHEZLogo from "../assets/Sponsor/JAHEZ.png";
import KuwaitLogo from "../assets/Sponsor/kuwait.png";
import Creator1 from "../assets/Creators/HalaAlmutairi.png";
import Creator2 from "../assets/Creators/FarahAlrasheedi.png";
import { useEffect } from "react";
import { FaPlayCircle, FaWhatsapp } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";

const LandingPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff"; // ✅ make text white

    return () => {
      document.body.style.backgroundColor = "#fff"; // reset background
      document.body.style.color = "#000"; // reset text
    };
  }, []);
  useEffect(() => {
    const counters = document.querySelectorAll(".highlight-number");

    const formatNumber = (num) => {
      if (num >= 1e9) return (num / 1e9).toFixed(1) + "B+";
      if (num >= 1e6) return (num / 1e6).toFixed(1) + "M+";
      return Math.floor(num);
    };

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = target / 400;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = formatNumber(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = formatNumber(target);
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); // prevent re-trigger
          }
        });
      },
      { threshold: 0.99 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <>
      <div className="container">
        <div style={{ gridColumn: "1 / -1", marginTop: "30px" }}>
          <NavBar />
          <div className="Hero">
            <h1 className="large-heading no-break-align">
              Ordering made easy—for you
              <br />
              and your customers.
            </h1>

            <p className="paragraph-text ">
              AI-powered ordering through voice and WhatsApp—
              <br /> built for every age and ability.
            </p>

            <div className="cta-buttons">
              <a href="/signup" className="btn btn-secondary">
                GET STARTED <span>&#8594;</span>
              </a>
            </div>
          </div>
          <div className="sponsor-section">
            <div className="sponsor-box">
              <img src={JAHEZLogo} alt="Sponsor 1" className="sponsor-logo" />
              <img src={KuwaitLogo} alt="Sponsor 2" className="sponsor-logo" />
            </div>
          </div>
          <div className="about-section centered-content" id="about">
            <h2 className="section-title">Who We Are</h2>
            <p className="about-subtitle">
              You bring the Food. We help you go further.
            </p>
            <p className="about-text">
              FUB is a Kuwaiti platform that helps food vendors reach all kinds
              of customers— young, old, and everyone in between. We make food
              ordering easy through short videos, voice messages, and WhatsApp.
              Whether your users like to explore with their eyes or prefer to
              speak their order, FUB makes the experience fast, familiar, and
              accessible.
            </p>
          </div>
          <div className="creators-section" id="contact">
            <h3 className="creators-title">Creators</h3>
            <div className="creator-cards">
              <div className="creator-unit">
                <div
                  className="creator-card"
                  style={{ backgroundColor: "#FEB3FF" }}
                  onClick={() =>
                    window.open("https://halaalmutairi.dev", "_blank")
                  }
                >
                  <img
                    src={Creator1}
                    alt="Creator 1"
                    className="creator-image"
                  />
                </div>
                <div className="creator-info">
                  <h4 className="creator-name">Hala Almutairi</h4>
                  <p className="creator-role">Computer Engineer</p>
                </div>
              </div>

              <div className="creator-unit">
                <div
                  className="creator-card"
                  style={{ backgroundColor: "#B3D5FF" }}
                  onClick={() => window.open("https://example3.com", "_blank")}
                >
                  <img
                    src={Creator2}
                    alt="Creator 2"
                    className="creator-image"
                  />
                </div>
                <div className="creator-info">
                  <h4 className="creator-name">Farah Alrasheedi</h4>
                  <p className="creator-role">Civil Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="success-section  centered-content">
            <h2 className="section-title">
              One number. One message. Every meal.
            </h2>

            <p className="section-blurb">
              WhatsApp powers conversations around the world—including food
              delivery. In the GCC, it's more than a messaging app— it's the
              shortcut to your next meal. And now, it's accessible to all.
            </p>

            <div className="highlight-block">
              <div className="glass-card">
                <h3 className="highlight-number" data-target="2700000000">
                  0
                </h3>
                <p className="highlight-label">WhatsApp users worldwide</p>
              </div>

              <div className="glass-card">
                <h3 className="highlight-number" data-target="90000000">
                  0
                </h3>
                <p className="highlight-label">WhatsApp penetration in GCC</p>
              </div>

              <div className="glass-card">
                <h3 className="highlight-number" data-target="7000000">
                  0
                </h3>
                <p className="highlight-label">
                  Users with visual disabilities in MENA
                </p>
              </div>
            </div>

            <p className="section-blurb">
              Whether you're traveling through Riyadh, Doha, or Dubai—FUB lets
              you skip the clutter of local delivery apps. One WhatsApp number
              connects you to vendors instantly. No downloads. No re-installs.
              No tech stress. And for users who prefer to speak rather than
              scroll, FUB is voice-friendly. Just record a message and order
              food, independently. It’s empowering. It’s familiar. And it’s
              designed for everyone.
            </p>
          </div>
          <div className="features-section" id="features">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              You bring the Food. We help you go further.
            </p>

            <div className="features-grid">
              <div className="glass-card feature-card">
                <FaPlayCircle className="feature-icon" />
                <h3 className="feature-title">FUBMedia</h3>
                <p className="feature-text">
                  Showcase dishes with short, snackable videos that spark
                  cravings. Customers browse visually—just like social apps.
                </p>
              </div>

              <div className="glass-card feature-card">
                <FaWhatsapp className="feature-icon" />
                <h3 className="feature-title">WhatsApp Ordering</h3>
                <p className="feature-text">
                  No app downloads. No accounts. Just send a message or voice
                  note to order—from anywhere in the region.
                </p>
              </div>

              <div className="glass-card feature-card">
                <MdDashboard className="feature-icon" />
                <h3 className="feature-title">Vendor Dashboard</h3>
                <p className="feature-text">
                  Track orders, manage menus, and respond—all in one inclusive
                  dashboard. Designed for ease and simplicity.
                </p>
              </div>

              <div className="glass-card feature-card">
                <AiOutlineBarChart className="feature-icon" />
                <h3 className="feature-title">Customer Insights</h3>
                <p className="feature-text">
                  Learn what your audience craves. Our insights help you adapt
                  to trends across age, ability, and platform.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-container">
              <p className="footer-top">
                JAHEZ × Kuwait Innovation Center — Hackathon 2025
              </p>
              <p className="footer-text">© 2025 FUB. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
