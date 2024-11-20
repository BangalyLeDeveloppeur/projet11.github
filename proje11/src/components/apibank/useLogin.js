import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginFailed,
  editName,
} from "../../store/Slice/InfoLoginSlice";
import { useDispatch } from "react-redux";
import { apiGetProfile, apiLogin } from "../apiLogi/apiLogin";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /////////////////////////////////////la gestion de modification///////////////////////
  const handleEditName = async (token, newName) => {
    if (!newName) {
      console.error("Le nouveau nom est manquant");

      return { success: false };
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
        return { success: true, userName: newName };
      } else {
        console.error("échec de la mise à jour du nom d'utilisateur");
        return { success: false };
      }
    } catch (error) {
      console.error("Erreur pendant la requête fetch", error);
      return { success: false };
    }
  };

  const login = async (username, password) => {
    const resultat = await apiLogin(username, password);
   // console.log(resultat.token)
    if (resultat.token) {
      const resultatProfile = apiGetProfile(resultat.token);
    
      if (resultatProfile) {
        dispatch(
          loginSuccess({
            token: resultat.token,
            username: username,
            firstName: (await resultatProfile).firstName,
          })
        );
        navigate("/Transaction");
      } else {
        dispatch(loginFailed({ errorMessage: resultatProfile.error }));
        console.log("j'ai pas le token");
      }
    } else {
      dispatch(loginFailed({ errorMessage: resultat.error }));
    }
  };

  return { login, handleEditName };
};

export default useLogin;
