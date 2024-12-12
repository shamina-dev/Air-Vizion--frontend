import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current location

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="site-title">
          Air Vizion
        </Link>
        <ul>
          <CustomLink to="/system">System</CustomLink>
          <CustomLink to="/solution">Solution</CustomLink>
          <CustomLink to="/sensors">Sensors</CustomLink>
          <CustomLink to="/implementation">Implementation</CustomLink>
          <CustomLink to="/feedback">Feedback</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </header>
  );
}

function CustomLink({ to, children }) {
  const location = useLocation(); // Get the current location

  return (
    <li className={location.pathname.toLowerCase() === to.toLowerCase() ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Header;