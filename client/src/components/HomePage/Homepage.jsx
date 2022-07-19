
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import Typical from 'react-typical'
import "./homepage.css"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'monospace',
    fontSize: '1.2em',
    background: "#000"
  },
  appbar: {
    background: '#323132',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#a425ff',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#fff',
    fontSize: '4rem',
  }
}));

export default function Homepage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          <span className={classes.colorText}>Produc_Div</span>
          </h1>
       <NavLink to='/sign-in' >
         <button className='buttons'>Sign In</button>
          </NavLink>
        <NavLink to='/register'> <button className='buttons'>Register</button></NavLink> 


        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div id="console-container">
          <br />
          <p>
          <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          '<',
          1000,
          '< Produc_Div />', 
          2000,
        ]}
        />
        </p>
        </div>
      </Collapse>
    </div>
  );
}
