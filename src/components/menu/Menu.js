import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>

            <div className="menu-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default Menu;
