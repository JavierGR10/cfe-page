import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Avatar } from "./Avatar";
import { useNavigate } from "react-router-dom";
import cfe_navbar_white from '../../assets/images/cfe_navbar_white.png';

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-bg navbar-expand-lg ${
        isSticky ? "sticky-top sticky" : ""
      }`}
    >
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand d-flex align-items-center ">
          <img
            src={cfe_navbar_white}
            alt="Logo"
            width="150"
            // height="35"
            className="img-fluid"
          />
        </Link>
        <Avatar />
      </div>
    </nav>
  );
};
