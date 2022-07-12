import axios from "axios";
import { useRef, useState, useEffect, useContext, React } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider";
// import useApplicationData from "./hooks/useApplicationData";
// import axios from "axios";

export default function SignIn({ state, setState }) {
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
    // console.log("///////", state);
    // let userStateArray = Object.keys(state.users).map((key) => {
    //   let array = state.users[key];
    //   array.key = key;
    //   return array;
    // });
    // console.log(userStateArray);
    // console.log("----------------------------------------");
    if (validateLogin())
      console.log("**************SUBMIT Sign-In clicked **************");
    const body = {
      email,
      password,
    };
    axios
      .post("http://localhost:8080/users/sign-in", body)
      // const userArr = [];

      .then(
        ({ data }) => {
          // userStateArray.map((user) => {
          //   if (user.email === email) {
          //     console.log("##########", user.id);

          return login(data.user);
        }
        //   });
      )
      .then(() => navigate("/dashboard", { replace: true }))

      .catch((error) => {
        setErrMsg(error.response.data.error);
      });
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You have loggin in!</h1>
          <br />
          <p>
            <a href="#">Go to Project Dashboard</a>
          </p>
        </section>
      ) : (
        <section>
          <h1>Sign In</h1>
          {/* <div>{errMsg ? <div>{errMsg}<div> : <div></div>} </div> */}
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
            <button
              type="button"
              className="btn"
              onClick={(event) => handleSubmit()}
            >
              Sign In
            </button>
          </form>
          <p>
            Don't have an account?
            <br />
            <span className="link">
              {/* put router link here */}
              <a href="/users/register">Register</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}
