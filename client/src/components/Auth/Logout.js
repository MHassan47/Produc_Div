import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "../SideBar/SideBar.css";
import { MdLogout } from "react-icons/md";

const Logout = (props) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/logout", { withCredentials: false })
      .then(() => {
        logout();
      })
      .then(() => navigate("/", { replace: true }))
      .catch((error) => console.log(error));
  };
  console.log("LOGGED OUT USER", user);
  return (
    <div className="row" onClick={handleClick}>
      <MdLogout className="logout_icon" id="icon" />
      <div id="title">Logout</div>
      {/* <button onClick={handleClick}>Logout</button> */}
    </div>
  );
};

export default Logout;
