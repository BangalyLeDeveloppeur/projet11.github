import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../../store/Slice/InfoLoginSlice";
import useLogin from "../apibank/useLogin";

const Connexion = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const dispatch = useDispatch();
  const { loading, errorMessage } = useSelector((state) => state.infologin);

  // Handle input changes for username and password fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch login start action and await login response
    dispatch(loginStart());
    try {
      await login(username, password);
    } catch (error) {
      console.error("Login error:", error);
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

          <button
            className="sign-in-button"
            type="submit"
            disabled={loading || !username || !password}
          >
            {loading ? "Connexion en cours..." : "Sign In"}
          </button>

          {errorMessage && (
            <p style={{ color: "red" }} aria-live="assertive">
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Connexion;
