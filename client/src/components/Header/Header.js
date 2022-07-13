import React from 'react';
// import PropTypes from 'prop-types';
// import { Button } from './Button';
import './Header.css';
import { Navigate, Link } from 'react-router-dom';
// import useApplicationData from "/Users/ameraalleyne/lighthouse/final/client/src/hooks/useApplicationData.js";
// import { useState } from "react";



export default function Header(props) {
 
    return (
      <header className="Header">
        <div>
          <div>
            <h1>Project Name</h1>
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

