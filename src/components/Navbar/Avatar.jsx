import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";

export const Avatar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const name = localStorage.getItem("token").toUpperCase();

  return (
    <div className="d-flex align-items-center ">
      <div className="btn-group d-flex align-items-center ">
        {/* <span className="username">{name}</span> */}
        <button
          type="button"
          className="btn btn-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaUserCircle size={"1.5rem"} color="white" />
          {/* <PiUserCircleFill  size={"2rem"} color="white" /> */}

          {/* 
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
          className="rounded-circle"
          height="22"
          alt="Avatar"
          loading="lazy"
        /> */}
        </button>
        <ul className="dropdown-menu dropdown-menu-end ">
          <li className="dropdown-item" onClick={handleLogOut}>
            Cerrar sesión
          </li>
        </ul>
      </div>
    </div>
  );
};
