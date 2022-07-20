import React, { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../../context/AuthProvider";
import "../../Docs/Logo.css";
import DropDown from "./DropDown";
import Typical from 'react-typical'



export default function Header(props) {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div>
      </div>
      <div className="h1-pro">

        <Typical
          loop={100}
          wrapper="m"
          fontFamily="monospace"
          steps={[
            '<',
            1000,
            '< Produc_Div />',
            2000,
          ]}
        />

      </div>


      <div className="header_title">
        {props.state?.projects?.map((project) => {
          if (project.id === props.currentProject)
            return <div className="header_title_text">{project.name} </div>;
        })}
        <DropDown
          className="dropdown"
          currentProject={props.currentProject}
          setCurrentProject={props.setCurrentProject}
        />
      </div>
      <div className="project_members"></div>
    </header>
  );
}
