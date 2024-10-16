import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../store/Slice/InfoLoginSlice";

const Wellcom = () => {
  const dispatch = useDispatch();
  const { username, token } = useSelector((state) => state.infologin);
  const isAuthenticated = !!username;

  // Gérer la saisie du nouveau nom
  const [newName, setNewName] = useState("");

  const handleEditName = () => {
    if (token && newName) {
      dispatch(loginSuccess({ token, username: newName }));
    }
  };

  return (
    <div className="wellcom">
      <div className="wellcom-header">
        <h1>
          Welcome back
          <br />
          {isAuthenticated ? username : "bonjour"}!
        </h1>
        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button className="edit-button" onClick={handleEditName}>
          Edit Name
        </button>
      </div>
    </div>
  );
};

export default Wellcom;
