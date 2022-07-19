import Kanban from "../Kanban/Kanban";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Dashboard.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { NavLink, useSearchParams } from "react-router-dom";

const Dashboard = ({ state, setState, updateCard, addUserToCard }) => {
  const [currentProject, setCurrentProject] = useState(1);
  const { user } = useContext(AuthContext);
  return user ? (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <Header
          state={state}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
      </div>
      <div className="dashboard_content">
        <div className="dashboard_sidebar">
          <SideBar />
        </div>
        <div className="dashboard_kanban">
          <Kanban
            state={state}
            setState={setState}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            updateCard={updateCard}
            addUserToCard={addUserToCard}
          />
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
