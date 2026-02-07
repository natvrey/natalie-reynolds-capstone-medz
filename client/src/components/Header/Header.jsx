import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  const getTitle = () => {
    if (pathname === "/profiles/create") return "Create Profile";
    if (pathname === "/profiles") return "All Profiles";
    if (pathname.match(/^\/profiles\/[^/]+$/)) return "Single Profile";
    return null;
  };

  const title = getTitle();
  const isSingleProfile = title === "Single Profile";

  return (
    <header className={`header ${isHome ? "header--home" : ""} ${isSingleProfile ? "header--single-profile" : ""}`}>
      <section className="header__logo-text">
        {isHome ? (
          <Link to="/">
            <span className="header__text">Medz+</span>
            <img className="header__logo" src={logo} alt="Medz+ logo" />
          </Link>
        ) : (
          <Link to={pathname === "/profiles" ? "/" : "/profiles"} className="header__back" aria-label="Back">
            ←
          </Link>
        )}
        {title && <span className="header__title">{title}</span>}
        {!isHome && <span style={{ width: 32 }} />}
      </section>
    </header>
  );
};

export default Header;
