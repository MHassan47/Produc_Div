
// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import {AppBar, IconButton, Toolbar} from "@material-ui/core";
// import SortIcon from '@material-ui/icons/Sort';
// import useApplicationData from "../../hooks/useApplicationData";

// const useStyles = makeStyles((theme) => ({
//   AppBar: {
//     background: 'none',
//   }
//   icon: {
//     color: '#fff'
//     fontSize: "2rem"
//   }
// }));
// export default function Homepage() {
//   const classes = useStyles();
//   // const style = {
//   //   "background-image": `url("images/background.jpg")`,
//   //   "background-repeat": "no-repeat",
//   //   "background-size": "cover",
//   //   position: "absolute",
//   //   height: "100%",
//   //   width: "100%"
//   // }

//   return (
//     <div className="homepage">
//       <AppBar className={classes.appbar} elevation={0}>
//         <Toolbar>
//           <h1 className={classes.app}> Home Page </h1>
//         </Toolbar>
//       </AppBar>
//       {/* <div style={style}></div>  */}
//       {/* <div className="homepage" />
//       {/* < div className = { classes.root } > */}
//       {/* <h1> Home Page </h1> */}
//       {/* </div > */}
//       <NavLink to='/signin' >
//         <Button color="primary" variant="contained">login </Button>
//       </NavLink>
//       <NavLink to='/register'> <button>Register</button></NavLink> 

//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
// import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
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
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
export default function Homepage() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
          <span className={classes.colorText}>HomePage.</span>
          </h1>
       <NavLink to='/sign-in' >
         <button>Login</button>
          </NavLink>
        <NavLink to='/register'> <button>Register</button></NavLink> 

          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>HomePage</span>
          </h1>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>
      </Collapse>
    </div>
  );
}