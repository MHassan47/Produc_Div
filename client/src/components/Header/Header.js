import React, { useContext, useState } from "react";
// import PropTypes from 'prop-types';
// import { Button } from './Button';
import "./Header.css";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
// import { useState } from "react";

export default function Header(props) {
  const [currentproject, setCurrentProject] = useState(1);
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div>
        <div className="header_title">
          {props.state.projects.map((project) => {
            if (project.id === currentproject)
              return <div className="header_title_text">{project.name} </div>;
          })}
        </div>
        <div>
          {/* <button size="small" label="Log out" />
            <>
              <button size="small" label="Log in" />
              <Link to="/register" >
              <button size="small" onClick={"/register"} label="Sign up" />
              </Link>
            </> */}
        </div>
      </div>
    </header>
  );
}
// }
// Header.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Header.defaultProps = {
//   user: null,  onClick={logout}   onClick={login}
