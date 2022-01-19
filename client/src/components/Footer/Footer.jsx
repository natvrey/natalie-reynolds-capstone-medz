import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/images/logo.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <Link className="link-tags" to="/">
        <section className="footer__logo-text">
          <h1 className="footer__text">
            Medz
            <img className="footer__logo" src={logo} alt="app logo" />
          </h1>
        </section>
      </Link>
      <p className="footer__paragraphs">©2022</p>
      <p className="footer__paragraphs">Privacy</p>
      <p className="footer__paragraphs">Terms</p>
      <p className="footer__paragraphs">About Us</p>
    </footer>
  );
};

export default Footer;
