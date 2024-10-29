import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailed } from "../../store/Slice/InfoLoginSlice";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (username, password) => {
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
        const user = data.username || username;
        dispatch(loginSuccess({ token: data.token, username: user }));
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

  return login;
};

export default useLogin;
