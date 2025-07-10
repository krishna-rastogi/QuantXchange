import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar sticky-top navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-1">
        <Link className="navbar-brand ml-5" to="/">
          <img src="media/Images/QuantXchange_Logo.png" style={{ width: "12%" }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/signup") ? "active-nav" : ""}`}
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active-nav" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/products") ? "active-nav" : ""}`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/pricing") ? "active-nav" : ""}`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/support") ? "active-nav" : ""}`}
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
