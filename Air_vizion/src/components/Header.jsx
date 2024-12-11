<<<<<<< Updated upstream
import { Link } from "react-router-dom";

function Header(){
  return(
    <header>
      
        <nav className="nav">
        <Link to="/" className="site-titel">Kandy Air</Link>
          <ul>
            <li> <Link to="/system">System</Link></li>
            <li><Link to="/sensors">Sensors</Link> </li>
            <li><Link to="/implementation">Implementation</Link> </li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
=======
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
>>>>>>> Stashed changes
    </header>
  );
}

<<<<<<< Updated upstream
function CustomLink({to,children,...props}){
  const path = window.location.pathname

  return(
    <li className={path === to ? "active":""}>
      <Link to={to} {...props}>
        {children}
      </Link>
=======
function CustomLink({ to, children }) {
  const location = useLocation(); // Get the current location

  return (
    <li className={location.pathname.toLowerCase() === to.toLowerCase() ? "active" : ""}>
      <Link to={to}>{children}</Link>
>>>>>>> Stashed changes
    </li>
  );
}

<<<<<<< Updated upstream
export default Header
=======
export default Header;
>>>>>>> Stashed changes
