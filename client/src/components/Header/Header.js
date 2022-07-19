import React, { useContext } from "react";

import "./Header.css";
// import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "../../Docs/Logo.css";
import DropDown from "./DropDown";

export default function Header(props) {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src={require("../../Docs/logo-img.png")}
          alt={"ProducDiv"}
          />
      </div>
          <h1 className="h1-pro">Produc_Div</h1>
      {/*       
        <div className="header_title">
          {props.state.projects.map((project) => {
            if (project.id === props.currentproject)
              return <div key={project.id} className="header_title_text">{project.name} </div>;

      <DropDown
        className="dropdown"
        currentProject={props.currentProject}
        setCurrentProject={props.setCurrentProject}
      /> 
       {/* <div className="header_title">
        {props.state?.projects?.map((project) => {
          if (project.id === props.currentProject)
            return <div className="header_title_text">{project.name} </div>;
        })}   */}
      {/* </div> */}
      <div className="project_members"></div>
    </header>
  );
}
