import React, { useState } from "react";
import { useSelector } from "react-redux";
import useLogin from "../apibank/Api";

const Welcome = () => {
  const { handleEditName } = useLogin();
  const { token, firstName, isAuthenticated } = useSelector(
    (state) => state.infologin
  );

  const [newName, setNewName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onEditName = async () => {
    const result = await handleEditName(token, newName);
    if (result.success) {
      setIsEditing(false);
    } else {
      console.log("Erreur lors de la mise à jour du nom d'utilisateur");
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true); // Show input field to edit name
  };

  return (
    <div className="welcome">
      <div className="welcome-header">
        <h1>
          Welcome back
          <br />
          {isAuthenticated && firstName
            ? `${firstName}`
            : "Username not displayed!"}
          !
        </h1>

        {isEditing ? (
          <>
            <input className="new-name"
              type="text"
              placeholder="Enter new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              className="save-button"
              onClick={onEditName}
              disabled={!newName.trim()}
            >
              Enregistre
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEditButtonClick}>
            Edit Name
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
