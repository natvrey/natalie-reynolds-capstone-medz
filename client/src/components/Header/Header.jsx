import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <header
      className="header"
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #e0bbff 0%, #fff0f3 100%)",
        boxShadow: "0 2px 16px 0 rgba(180, 120, 255, 0.10)",
        padding: "0.5rem 0",
        marginBottom: 18,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <section
        className="header__logo-text"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            className="header__text"
            style={{
              marginTop: "3px",
              color: "#7c3aed",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-1px",
              fontFamily: "AvenirNext LT Pro",
              textShadow: "0 2px 8px #fff0f3",
            }}
          >
            Medz
          </span>
          <img
            className="header__logo"
            src={logo}
            alt="app logo"
            style={{
              minHeight: 32,
              maxHeight: 40,
              minWidth: 32,
              maxWidth: 40,
              borderRadius: 12,
              boxShadow: "0 2px 8px 0 rgba(180, 120, 255, 0.10)",
            }}
          />
        </Link>
      </section>
    </header>
  );
};

export default Header;
