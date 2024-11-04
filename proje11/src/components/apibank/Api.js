import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginFailed,
  editName,
} from "../../store/Slice/InfoLoginSlice";
import { useDispatch} from "react-redux";

const useLogin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  ///////////////////////////////////////////la gestion de modification///////////////////////
  const handleEditName = async (token, newName) => {
    if (!newName) {
      console.error("Le nouveau nom est manquant");

      return {success: false};
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
       return { success: true, userName: newName }
      } else {
        console.error("échec de la mise à jour du nom d'utilisateur");
        return { success: false }
      }
    } catch (error) {
      console.error("Erreur pendant la requête fetch", error);
      return { success: false }
    }
  };
  ///////////////////////////////////////////////////////////////

  const Login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });
      const res = await response.json();
      const data = res.body;
      console.log(data);

      if (response.ok) {
        const profileResponse = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const profileData = await profileResponse.json();
        console.log(profileData);
        const firstName = profileData.body.firstName;
        dispatch(
          loginSuccess({ token: data.token, username: username, firstName })
        );
        navigate("/Transaction");
        console.log("Yes, successfully logged in!");
      } else {
        dispatch(loginFailed({ errorMessage: data.message }));
      }
    } catch (error) {
      dispatch(
        loginFailed({
          errorMessage:
            "Network or server error; please check the API address.",
        })
      );
      console.error("Fetch error:", error);
    }
  };

  return { Login, handleEditName };
};

export default useLogin ;

