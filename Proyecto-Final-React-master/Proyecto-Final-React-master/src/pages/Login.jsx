import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";   /*retorna una funcion */
import Swal from 'sweetalert2'
import "./Login.css";

const Login = () => {
  const [getPassword, setPassword] = useState("");
  const [getUsername, setUsername] = useState([]);
  let redireccion = useNavigate();

  function iniciarSesion() {
    fetch("http://localhost:8080/api/auth")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
    let auth = getUsuarios.some(
      (getUsuario) =>
        getUsuario.contraseña == getContrasena && getUsuario.correo == getCorreo
    );
    if (auth) {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        icon: "success",
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          redireccion("/");
        },
      });
    }
    /* Validar inicio de sesión con usuario o correo */
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          onChange={(e) => setUsername(e.target.value)}
          src="/imagenes/iconoSura-removebg-preview.png"
          alt="Logo Sura"
          className="logo"
        />
        <h1 className="title">Iniciar Sesión</h1>
        <input
          type="text"
          className="input"
          placeholder="Usuario"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Contraseña"
        />
        <button id="btnIniciar" className="btn" onClick={iniciarSesion} >
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Login;
