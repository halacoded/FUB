import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="container ">
      <a href="/" className="navbar-logo">
        FUB
      </a>

      <ul className="navbar-menu">
        <li>
          <a href="#about" className="navbar-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#features" className="navbar-link">
            FEATURES
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            CONTACT
          </a>
        </li>
        <li>
          <a href="/login" className="navbar-btn">
            LOGIN
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
