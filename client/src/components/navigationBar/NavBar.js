import { useState, useEffect, React } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentPathname = window.location.pathname;

    if (currentPathname === "/profile") {
      setActiveLink(0);
    } else if (currentPathname === "/jobs") {
      setActiveLink(1);
    } else if (currentPathname === "/viewmyprofile") {
      setActiveLink(2);
    } else if (currentPathname === "/settings") {
      setActiveLink(3);
    }
  }, [setActiveLink]);

  return (
    <div className="navbar">
      <nav className="navigation-bar">
        <ul>
          <li className={activeLink === 0 ? "active" : ""}>
            <a href="/profile">
              <span className="nav-icon">
                <i className="fa-solid fa-house"></i>
              </span>
              <br />
              Home
            </a>
          </li>
          <li
            data-testid="jobs-navbar"
            className={activeLink === 1 ? "active" : ""}
          >
            <a href="/jobs">
              <span className="nav-icon">
                <i className="fa-solid fa-suitcase"></i>
              </span>
              <br />
              All Users
            </a>
          </li>
          <li className={activeLink === 2 ? "active" : ""}>
            <a href="/viewmyprofile">
              <span className="nav-icon">
                <i className="fa-solid fa-book-journal-whills"></i>
              </span>
              <br />
              My Profile
            </a>
          </li>
          <li className={activeLink === 3 ? "active" : ""}>
            <a href="/settings">
              <span className="nav-icon">
                <i className="fa-solid fa-gear"></i>
              </span>
              <br />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
