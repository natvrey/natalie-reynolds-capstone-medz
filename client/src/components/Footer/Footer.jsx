import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/profiles", label: "Profiles", icon: ListIcon },
    { to: "/profiles/create", label: "Create", icon: PersonAddIcon },
    { to: "/instructions", label: "Info", icon: InfoIcon },
  ];

  return (
    <footer className="footer">
      {navItems.map(({ to, label, icon: Icon }) => {
        // Active only when pathname matches this route; if pathname is a sub-route, only the longest matching nav item is active (so /profiles/create highlights Create, not Profiles)
        const isActive =
          pathname === to ||
          (pathname.startsWith(to + "/") &&
            !navItems.some((other) => other.to !== to && other.to.startsWith(to) && pathname.startsWith(other.to)));
        return (
          <Link
            key={to}
            to={to}
            className={`footer__nav-link ${isActive ? "footer__nav-link--active" : ""}`}
          >
            <Icon className="footer__icon" />
            <span>{label}</span>
          </Link>
        );
      })}
    </footer>
  );
};

function HomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function ListIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    </svg>
  );
}

function PersonAddIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function InfoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}

export default Footer;
