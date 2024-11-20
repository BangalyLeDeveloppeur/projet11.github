import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Slice/InfoLoginSlice";

const Navigation = () => {
  const { isAuthenticated, firstName } = useSelector(
    (state) => state.infologin
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/about");
  };

  return (
    <div className="navigation">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Argent Bank Logo" />
      </NavLink>

      <ul>
        {/* Affichage conditionnel basé sur isAuthenticated */}
        {isAuthenticated ? (
          <>
            <NavLink
              to="/transaction"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>
                <i className="fa fa-user-circle"></i>
              </li>
            </NavLink>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <span>{firstName}</span>
                <i class="fa fa-sign-out"></i>
                sign out
              </button>
            </li>
          </>
        ) : (
          <>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>
                <i className="fa fa-user-circle"></i>
                Sign In
              </li>
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
