import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginStart,
  LoginSuccess,
  LoginFailed,
} from "../../store/Slice/InfoLoginSlice";
//////
import axios from "axios";
const getwork = () => {
  axios
    .get("http://localhost:3001/")
    .then((res) => {
      console.log(res); // res.data contient les données de la réponse
      
    })
    .catch((error) => {
      console.error("Erreur lors de la requête:", error); // Gestion des erreurs
    });
};
getwork();

const Connexion = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector((state) => state.infologin); // Accéder à l'état d'authentification

  //pour recupérer les données dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  // la fonction qui gère lenvoi des données du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(LoginSuccess({ token: data.token }));
        naigate("/Tranjaction");
        console.log("yess,je suis bien connecté!");
      } else {
        dispatch(LoginFailed({ errorMessage: data.message }));
      }
    } catch (error) {
      dispatch(
        LoginFailed({
          errorMessage:
            "Erreur réseau ou serveur; veuillez vous ajouté l'adress de l'api.",
        })
      );
    }
  };

  return (
    <div className="section-form">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit" disabled={loading}>
            {loading ? "Connexion en cours..." : "Sign In"}
          </button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      </section>
    </div>
  );
};

export default Connexion;
