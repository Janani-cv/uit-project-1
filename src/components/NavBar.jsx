import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const navLinkStyle = {
    color: "#0B5345",
    fontWeight: "500",
    fontFamily: "Poppins, sans-serif",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "color 0.3s ease",
  };

  const navLinkHoverStyle = { color: "#1ABC9C" };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg container-fluid"
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "0.75rem 1rem",
        borderBottom: "3px solid #1ABC9C",
      }}
    >
      {/* Brand Logo and Name */}
      <Link
        className="navbar-brand d-flex align-items-center me-auto"
        to="/home"
        style={{ textDecoration: "none" }}
      >
        <span
          style={{
            color: "#1ABC9C",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.6rem",
            whiteSpace: "nowrap",
          }}
        >
         PHARMA MEDICAL STORE
        </span>
      </Link>

      {/* Toggle Button for Mobile View */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          {[
            { to: "/home", label: "Home" },
            { to: "/product", label: "Product" },
            { to: "/order", label: "Order" },
            { to: "/bill", label: "Bill" },
            { to: "/about", label: "Aboutus" },
            { to: "/contact", label: "Contact" },
          ].map((item, idx) => (
            <li className="nav-item" key={idx}>
              <Link
                className="nav-link"
                to={item.to}
                style={navLinkStyle}
                onMouseOver={(e) => (e.target.style.color = navLinkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = navLinkStyle.color)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Logout Button */}
          <li className="nav-item">
            <span
              onClick={handleLogout}
              style={{
                ...navLinkStyle,
                color: "red",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "#E74C3C")}
              onMouseOut={(e) => (e.target.style.color = "red")}
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
