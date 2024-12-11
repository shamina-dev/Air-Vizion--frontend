import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header style={{ backgroundColor: "Lightgray" }}>
      <nav
        className="nav"
        style={{
          position: "relative",
          top: "100%",
          zIndex: "999",
          paddingTop: "10px",
          alignItems: "center",
          paddingBottom: "0px",
          textAlign: "justify",
        }}
      >
        <Link
          to="/"
          className="site-title"
          style={{ paddingTop: "10px", textAlign: "justify" }}
        >
          Air Vizion
        </Link>
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "flex",
          }}
        >
          <li style={{ position: "relative", margin: "0 10px" }}>
            <Link to="/system">System</Link>
          </li>
          <li
            style={{ top: "100%", top: "100%" }}
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <span className="dropdown-toggle" style={{ padding: "10px" }}>
              Solution
            </span>
            {isDropdownVisible && (
              <ul
                className="dropdown-menu"
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #ccc",
                  position: "absolute",
                  top: "99%",
                  minWidth: "200px",
                }}
              >
                <li
                  style={{
                    paddingtop: "100px",
                    border: "1px",
                  }}
                >
                  <Link to="/solution/why">Why Air Quality Monitoring?</Link>
                </li>
                <li>
                  <Link to="/solution/healthcare">Healthcare Solutions</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/sensors">Sensors</Link>
          </li>
          <li>
            <Link to="/implementation">Implementation</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
