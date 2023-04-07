import React from "react";
import img from "../images/logo.jpg";
import { Link,useNavigate } from "react-router-dom";

const Nav = () => {
  let login = false;
  let log = "";
  const Navigate=useNavigate();
  if (localStorage.getItem("user")) {
    log = JSON.parse(localStorage.getItem("user"));
    login = log.login;
  }
  const logout = () => {
    localStorage.clear();
    Navigate('/Login')
}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container-fluid">
          <img src={img} alt="not found" className="logo_jis" />
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {login && (
                <>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active text-white"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Services"
                      className="nav-link text-white"
                      href="/"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link text-white" href="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pricing" className="nav-link text-white">
                      Pricing
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link
                  to="/Login"
                  className="nav-link text-white mx-3"
                  onClick={
                    logout
                  }
                >
                  {login ? "Logout" : "Login"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Signup" className="nav-link text-white mx-3">
                  {login ? "" : "Signup"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
