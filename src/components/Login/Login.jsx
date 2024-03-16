import React, { useState } from "react";
import Swal from "sweetalert2";
import "./login.css";
import { useNavigate } from "react-router-dom";
import users from "../../assets/js/data";
import cfeLogo from '../../assets/images/cfe_logo.png';


// import data from "../assets/js/data";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const showAlert = () => {
    Swal.fire({
      title: "¡Bienvenido!",
      text: "Inicio de sesión exitoso",
      icon: "success",
      preConfirm: () => {
        navigate("/"); // Redirige a /home
      },
    });
  };

  const showErrorAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Crendenciales no válidas",
      icon: "error",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const obj = { username: 'admin', password: 'admin' };
    
    if (obj.username == username && obj.password == password) {
      showAlert();
      localStorage.setItem("token", username);
    } else {
      showErrorAlert();
    }
  };
  return (
    <>
      <div className="container-login">
        <div className="card-mirror">
          <div className="wrapper-flex">
            <div className="col-5">
              <img
                src={cfeLogo}
                className="img-fluid p-4"
                alt=""
              />
            </div>
            <h1 class="card-title text-white mb-3">Iniciar sesión</h1>
          </div>

          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="col-lg-7 mx-auto">
                <div className="mb-3">
                  <label htmlFor="username " className="text-white">
                    Usuario
                  </label>
                  <input
                    className="form-control focus-ring focus-ring-success mt-2"
                    id="username"
                    type="text"
                    placeholder="John Doe"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="text-white">
                    Contraseña
                  </label>
                  <input
                    className="form-control focus-ring focus-ring-success mt-2"
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button className="mt-3 mb-4 btn btn-success w-100" type="submit">
                  Iniciar sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
