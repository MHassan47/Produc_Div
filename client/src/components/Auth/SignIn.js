import { useRef, useState, useEffect, useContext,  React } from "react";
// import AuthContext from './context/AuthProvider'
// import useApplicationData from "./hooks/useApplicationData";
// import axios from "axios";




export default function SignIn() {
  // const { setAuth } = useContext(AuthContext)

// user input, allow us to set focus to user input when the component loads
const userRef = useRef();
//   // for the error message, so if we get an error it can be announced by a screen reader for accessibility
const errRef = useRef();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);

useEffect(() => {
  userRef.current.focus();
}, []);

useEffect(() => {
  setErrMsg("");
}, [email, password]);

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(email, password);
  setEmail('');
  setPassword('');
  setSuccess(true);
}

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
    <p
      ref={errRef}
      className={errMsg ? "error message" : "offscreen"}
      aria-live="assertive">{errMsg} </p>

      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Don't have an account?<br />
        <span className="link">
          {/* put router link here */}
          <a href="/register">Register</a>
        </span>
      </p>
  </section>
  )}
  </>
);

}