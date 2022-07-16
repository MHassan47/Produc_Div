import React, { useContext, useState } from "react";
// import PropTypes from 'prop-types';
// import { Button } from './Button';
import "./Header.css";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
// import { useState } from "react";

export default function Header(props) {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="header_title">
        {props.state.projects.map((project) => {
          if (project.id === props.currentProject)
            return <div className="header_title_text">{project.name} </div>;
        })}
      </div>
      <div className="project_members"></div>
    </header>
  );
}
