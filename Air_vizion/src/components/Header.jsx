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
    </header>
  );
}

function CustomLink({to,children,...props}){
  const path = window.location.pathname

  return(
    <li className={path === to ? "active":""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header
