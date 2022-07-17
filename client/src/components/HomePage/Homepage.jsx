
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
// import { Link as Scroll } from 'react-scroll';
import Header from '../Header/Header';
import "./homepage.css"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: '#cab7ff',
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
    color: '#685aa4',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#cab7ff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#685aa4',
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
         <button className='buttons'>Login</button>
          </NavLink>
        <NavLink to='/register'> <button className='buttons'>Register</button></NavLink> 

          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={50}
      >
        <div id="console-container" className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>Produc_Div</span>
          </h1>
          <div>

              <NavLink to='/dashboard'> 
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} 
              />
            </IconButton>
               </NavLink> 
              </div>
        </div>
      </Collapse>
    </div>
  );
}