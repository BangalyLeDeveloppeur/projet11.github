import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editName } from "../../store/Slice/InfoLoginSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const {token, firstName
  ,isAuthenticated} = useSelector((state) => state.infologin);
  

  

  // Gérer la saisie du nouveau nom
  const [newName, setNewName] = useState("");

  const handleEditName = async () => {
    if (!token || !newName) {
      console.error("token ou nouveau nom est manquant");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newName }),
        }
      );

      if (response.ok) {
        dispatch(editName({ token, userName: newName }));
        console.log("Nom d'utilisateur est mis en jour avec succès");
      } else {
        console.error("échec de la mise à jour du nom d'utilisateur");
      }
    } catch (error) {
      console.error("Erreur pendant la requête fetch", error);
    }
  };
  return (
    <div className="wellcom">
      <div className="wellcom-header">
        <h1>
          Welcome back
          <br />
          {isAuthenticated ? `${firstName}` : "Username not displayed!"}
          !
        </h1>
        <input
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className="edit-button"
          onClick={handleEditName}
          disabled={!newName}
        >
          Edit Name
        </button>
      </div>
    </div>
  );
};

export default Welcome;
