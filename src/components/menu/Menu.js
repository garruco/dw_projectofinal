import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">
          <svg
            id="Camada_1"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 302.26 273.95"
            className="logo"
          >
            <path
              className="cls-1"
              d="M82.48,105.18V250.52H47.15v-99.28c-3.8,7.6-14.09,10.96-21.02,11.18v-29.07c11.85-.89,21.02-10.51,21.02-28.17h35.33Z"
            />
            <path
              className="cls-1"
              d="M100.37,220.78v-84.97c0-19.01,11.4-30.63,27.06-30.63h54.11c18.11,0,27.05,14.09,27.05,34.21v81.39c0,16.77-10.28,29.74-28.62,29.74h-50.76c-16.99,0-28.84-10.29-28.84-29.74Zm74.91-2.01v-81.83h-41.59v81.83h41.59Z"
            />
            <path
              className="cls-1"
              d="M276.12,105.18V250.52h-35.33v-99.28c-3.8,7.6-14.09,10.96-21.02,11.18v-29.07c11.85-.89,21.02-10.51,21.02-28.17h35.33Z"
            />
            <path
              className="cls-1"
              d="M65.98,75.75c0,6.72-3.21,11.01-9.74,11.01h-20.46c-5.46,0-9.64-3.12-9.64-10.42v-10.52h10.23v11.5h19.48v-13.64l-24.75-10.52c-3.7-1.66-4.97-3.99-4.97-8.38v-12.37c0-6.33,3.21-8.96,9.16-8.96h21.43c7.11,0,9.26,3.6,9.26,11.01v8.96h-10.13v-10.52h-19.48v11.89l25.04,10.62c3.51,1.66,4.58,3.8,4.58,8.38v11.98Z"
            />
            <path
              className="cls-1"
              d="M85.85,32.98h-15.68v-9.55h41.89v9.55h-15.78v53.78h-10.42V32.98Z"
            />
            <path
              className="cls-1"
              d="M157.46,23.43v52.31c0,6.43-3.22,11.01-9.74,11.01h-21.34c-5.36,0-9.55-3.12-9.55-10.33V23.43h10.33v53.68h19.97V23.43h10.33Z"
            />
            <path
              className="cls-1"
              d="M166.03,23.43h31.56c6.82,0,8.57,4.38,8.57,11.69v40.72c0,5.46-2.92,10.91-10.03,10.91h-30.1V23.43Zm30.01,53.68V33.08h-19.68v44.03h19.68Z"
            />
            <path
              className="cls-1"
              d="M215.53,23.43h10.33v63.32h-10.33V23.43Z"
            />
            <path
              className="cls-1"
              d="M235.11,76.43V32.69c0-6.33,3.21-9.25,8.87-9.25h23.09c6.92,0,9.06,3.8,9.06,11.01v41.31c0,6.43-3.31,11.01-9.94,11.01h-21.53c-5.36,0-9.55-3.12-9.55-10.33Zm30.78,.68V33.08h-20.65v44.03h20.65Z"
            />
          </svg>
        </Link>
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
