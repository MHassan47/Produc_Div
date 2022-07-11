
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useApplicationData from "../../hooks/useApplicationData";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '100vh',
//     backgroundImage: ''
//   }
// }));
export default function Homepage() {
  // const classes = useStyles();
  // const style = {
  //   "background-image": `url("images/background.jpg")`,
  //   "background-repeat": "no-repeat",
  //   "background-size": "cover",
  //   position: "absolute",
  //   height: "100%",
  //   width: "100%"
  // }

  return (
  <div> 
    {/* <div style={style}></div>  */}
    <div className="homepage" />
    {/* < div className = { classes.root } > */}
      <h1> Home Page </h1>
    {/* </div > */}

    <button> login </button>
    <button> Register</button>
       
     </div>
    )
}
  
