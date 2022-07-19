import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import Typical from 'react-typical'




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
    fontFamily: 'monospace',
    fontSize: '2.5rem',
    color: '#a425ff',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#000',
    fontSize: '4.5rem',
  },
}));



export default function Register({ state, setState }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo_url, setPhoto_url] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const validateRegistration = () => {
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !confirmPassword ||
      !photo_url
    ) {
      setError("Fields cannot be left blank");
      alert(error);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateRegistration()) {

      const body = {
        first_name,
        last_name,
        email,
        password,
        confirmPassword,
        photo_url,
        role,
      };
      
      axios
      .post("http://localhost:8080/users/register", body)
      .then((response) => {
        console.log(response);
        setState({
          ...state,
          users: {
            ...state.users,
            [response.data.user.id]: response.data.user,
          },
        });
        console.log("NEW STATE----", state);
      })
      .then(() => navigate("/sign-in"))
      .catch((error) => {
        console.log("Registration error---", error);
        alert("Email already exists");
      });
    }
    };
    
    return (
      <div>
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
      <div className="form_layout">
        <div className="form">
        <p className="h1-title">
          <Typical
        loop={Infinity}
        wrapper="l"
        steps={[
          ' ',
          1000,
          'Register', 
          6000,
        ]}
        />
        </p>
          <form onSubmit={handleSubmit}>
            <div className="form-body">
              <div className="username">
                <label className="form__label" htmlFor="firstName">
                  First Name{" "}
                </label>
                <input
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="lastname">
                <label className="form__label" htmlFor="lastName">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  name=""
                  id="lastName"
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  placeholder="LastName"
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
              <div className="email">
                <label className="form__label" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="password">
                <label className="form__label" htmlFor="password">
                  Password{" "}
                </label>
                <input
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="confirm-password">
                <label className="form__label" htmlFor="confirmPassword">
                  Confirm Password{" "}
                </label>
                <input
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="photo_url">
                <label className="form__label" htmlFor="photo_url">
                  Photo URL{" "}
                </label>
                <input
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  type="url"
                  id="photo_url"
                  placeholder="enter photo_url"
                  onChange={(e) => setPhoto_url(e.target.value)}
                  required
                />
              </div>
              <div className="role">
                <label className="form__label" htmlFor="role">
                  role{" "}
                </label>
                <input
                  className="form__input"
                  style={{ height: '2.5em', width: '60%'}}
                  type="text"
                  id="role"
                  placeholder="enter role "
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="footer-reg">
              <button
                type="submit"
                className="btn"
              // onClick={(event) => handleSubmit()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
