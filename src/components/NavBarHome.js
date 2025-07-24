import { useState } from "react";
import "../styles/NavBarHome.css";
import OrdersPage from "../pages/OrdersPage";
import InsightsPage from "../pages/InsightsPage";
import WhatsappPage from "../pages/WhatsappPage";

const NavBarHome = () => {
  const [activeSection, setActiveSection] = useState("orders");

  const renderSection = () => {
    switch (activeSection) {
      case "orders":
        return <OrdersPage />;
      case "insights":
        return <InsightsPage />;
      case "whatsapp":
        return <WhatsappPage />;
      default:
        return null;
    }
  };

  return (
    <div className="navbar-layout">
      <nav className="container2">
        <a href="/" className="navbar-logo2">
          FUB
        </a>
        <ul className="navbar-menu2">
          <li>
            <button
              className={`navbar-link2 ${
                activeSection === "orders" ? "active-tab2" : ""
              }`}
              onClick={() => setActiveSection("orders")}
            >
              ORDERS
            </button>
          </li>
          <li>
            <button
              className={`navbar-link2 ${
                activeSection === "insights" ? "active-tab2" : ""
              }`}
              onClick={() => setActiveSection("insights")}
            >
              INSIGHTS
            </button>
          </li>
          <li>
            <button
              className={`navbar-link2 ${
                activeSection === "whatsapp" ? "active-tab2" : ""
              }`}
              onClick={() => setActiveSection("whatsapp")}
            >
              WHATSAPP
            </button>
          </li>
          <li>
            <a href="/" className="navbar-btn2">
              SignOut
            </a>
          </li>
        </ul>
      </nav>

      <div className="content-below-navbar">{renderSection()}</div>
    </div>
  );
};

export default NavBarHome;
