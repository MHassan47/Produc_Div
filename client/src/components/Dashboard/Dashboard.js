import Kanban from "../Kanban/Kanban";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Dashboard.css";

const Dashboard = ({ state, setState }) => {
  return (
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
  );
};

export default Dashboard;
