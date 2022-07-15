import Kanban from "../Kanban/Kanban";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Dashboard.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

const Dashboard = ({ state, setState }) => {
  const { user } = useContext(AuthContext);
  return user ? (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <Header state={state} />
      </div>
      <div className="dashboard_content">
        <div className="dashboard_sidebar">
          <SideBar />
        </div>
        <div className="dashboard_kanban">
          <Kanban state={state} setState={setState} />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <NavLink to="/">Please Log in to proceed</NavLink>
    </div>
  );
};

export default Dashboard;
