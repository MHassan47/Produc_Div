import axios from "axios";
import { useRef, useState, useEffect,  React } from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from './context/AuthProvider'
// import useApplicationData from "./hooks/useApplicationData";
// import axios from "axios";




export default function SignIn(props) {
  const navigate = useNavigate();

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

const handleSubmit = async (event) => {

  console.log("**************SUBMIT Sign-In clicked **************")
  const body = {
    email,
    password
  }
  try {
    const { data } = await axios.post('/users/sign-in', body)
    console.log("+++++++++++++++data:  ", data)


  } catch (error) {
    console.log("----------- error:  ", error)
  }
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
    {/* <p
      ref={errRef}
      className={errMsg ? "error message" : "offscreen"}
      aria-live="assertive">{errMsg} </p> */}

      <h1>Sign In</h1>
      <form onSubmit={event => event.preventDefault()}>
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
        <button type="button" className="btn" onClick={(event) => handleSubmit()}>Sign In</button>
      </form>
      <p>
        Don't have an account?<br />
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