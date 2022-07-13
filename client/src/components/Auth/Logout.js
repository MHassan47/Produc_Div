import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Logout = (props) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/logout")
      .then(() => {
        logout();
      })
      .then(() => navigate("/", { replace: true }))
      .catch((error) => console.log(error));
  };
  console.log("LOGGED OUT USER", user);
  return (
    <div className="logout">
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
