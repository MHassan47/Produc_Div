import axios from "axios";
import { useRef, useState, useEffect, useContext, React } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./SignIn.css";
import { AuthContext } from "../../context/AuthProvider";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Typical from "react-typical";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "monospace",
    fontSize: "1.2em",
    background: "#000",
  },
  appbar: {
    background: "#323132",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    fontFamily: "monospace",
    fontSize: "2.5rem",
    color: "#a425ff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#000",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#fff",
    fontSize: "4rem",
  },
}));

export default function SignIn({ state, setState }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const { login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // user input, allow us to set focus to user input when the component loads
  const userRef = useRef();
  //   // for the error message, so if we get an error it can be announced by a screen reader for accessibility
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const validateLogin = () => {
    if (!email) {
      setErrMsg("Cannot be left blank");
      return false;
    }
    if (!password) {
      setErrMsg("Cannot be left blank");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("**************SUBMIT Sign-In clicked **************");
    const body = {
      email,
      password,
    };
    axios
      .post("http://localhost:8080/users/sign-in", body, {
        withCredentials: true,
      })

      .then(({ data }) => {
        return login(data.user);
      })
      .then(() => navigate("/dashboard", { replace: true }))

      .catch((error) => {
        setErrMsg(error.response.data.error);
      });
  };

  return (
    <div className="background-colour">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span href="/Homepage" className={classes.colorText}>
              Produc_Div
            </span>
          </h1>
          <NavLink to="/sign-in">
            <button className="buttons">Sign In</button>
          </NavLink>
          <NavLink to="/register">
            {" "}
            <button className="buttons">Register</button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <section className="section">
        <div className="sign-in-h1">
          <Typical
            loop={Infinity}
            wrapper="l"
            steps={[" ", 1000, "Sign In", 6000]}
          />
        </div>
        <div>
          <form className="signIn_form" onSubmit={handleSubmit}>
            <div>
              <label className="yt-font" htmlFor="email">
                Email:&nbsp;&nbsp;&nbsp;{" "}
              </label>
              <input
                type="text"
                id="email"
                fontSize="2em"
                style={{ height: "2.5em", width: "40%" }}
                ref={userRef}
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />
            </div>
            <br />
            <div>
              <label className="yt-font" htmlFor="password">
                Password:&nbsp;&nbsp;&nbsp;
              </label>
              <input
                type="password"
                id="password"
                style={{ height: "2.5em", width: "40%" }}
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
              />
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="btn"
                style={{ marginLeft: "8em" }}
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="footer">Don't have an account?</p>
          <br />
          <span className="link">
            <button
              type="button"
              className="btn"
              style={{ marginLeft: "18em" }}
              onClick={(event) => handleSubmit()}
            >
              {" "}
              <a className="register-btn " href="/register">
                Register
              </a>{" "}
            </button>
          </span>
        </div>
      </section>
    </div>
  );
}
