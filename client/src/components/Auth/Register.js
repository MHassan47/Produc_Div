import React from "react";
import { useRef, useState, useEffect } from "react";
// import { FiCheck } from "react-icons/fi";
// import { FaAsterisk } from "react-icons/fa";

// const validEmail = function ValidateEmail(input) {
//   const userRegValidation =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (input.value.match(userRegValidation)) {
//     alert("Valid email address!");
//     document.form1.text1.focus();
//     return true;
//   } else {
//     alert("Invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// };
const validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const validPwd  =
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const validPwd = function ValidatePwd(input) {
//   const passwordValidation =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//   if (input.value.match(passwordValidation)) {
//     alert("Valid password address!");
//     document.form1.text1.focus();
//     return true;
//   } else {
//     alert("Invalid password address!");
//     document.form1.text1.focus();
//     return false;
//   }
// };

export default function Register() {
  // user input, allow us to set focus to user input when the component loads
  const userRef = useRef();
  // for the error message, so if we get an error it can be announced by a screen reader for accessibility
  const errRef = useRef();

  // tied to the user input
  const [user, setUser] = useState("");
  // boolean tied to whether the name vaildates or not
  const [validatedEmail, setValidatedEmail] = useState(false);
  // boolean tied to whether we have focus on that input field or not
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validatePwd, setValidatePwd] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmedPwd, setConfirmedPwd] = useState("");
  const [validateConfirmedPwd, setValidateConfirmedPwd] = useState(false);
  const [confirmedPwdFocus, setConfirmedPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // setting the focus on the userName when the component loads. userRef = refernce the user
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // validate the username, add user state to the dependency arr.
  useEffect(() => {
    //.test is testing the user state against the vaildEmail and if it is validated then the result will be passed to the setValidatedName useState.
    const result = user;
    validEmail.test(user);
    console.log(result);
    console.log(user);
    setValidatedEmail(result);
  }, [user]);

  // useEffect(() => {
  //   const result = validPwd.test(password);
  //   console.log(result);
  //   console.log(password);
  //   setValidatePwd(result);
  //   const confirmed = password === confirmedPwd;
  //   setValidateConfirmedPwd(confirmed);
  //   //password state in the dependency array
  // }, [password, confirmedPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, confirmedPwd]);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/users")
  //   ])
  // })
  return (
    <section>
      <h1>Register</h1>
      {/* <p
        ref={errRef}
        className={errMsg ? "error message" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}{" "}
      </p> */}
      <form>
        <label htmlFor="first_name">
          First Name:
          <div>
            {/* {validatedEmail ? <FiCheck /> : "hide"}
         {validatedEmail || !user ? <FaAsterisk /> : "hide"} */}
          </div>
        </label>
        <input
          type="text"
          // id of user name
          id="first_name"
          // allow us to set focus on teh input
          ref={userRef}
          // autoComplete is off because we don't want to see previous values suggested for this field.
          autoComplete="off"
          //ties the input to the userState
          onChange={(event) => setUser(event.target.value)}
        />
        <br />

        <label htmlFor="last_name">
          Last Name:
          <div>
            {/* {validatedEmail ? <FiCheck /> : "hide"}
         {validatedEmail || !user ? <FaAsterisk /> : "hide"} */}
          </div>
        </label>
        <input
          type="text"
          // id of user name
          id="last_name"
          // allow us to set focus on teh input
          ref={userRef}
          // autoComplete is off because we don't want to see previous values suggested for this field.
          autoComplete="off"
          //ties the input to the userState
          onChange={(event) => setUser(event.target.value)}
        />
        <br />
        <label htmlFor="email">
          Email:
          <div>
            {/* {validatedEmail ? <FiCheck /> : "hide"}
         {validatedEmail || !user ? <FaAsterisk /> : "hide"} */}
          </div>
        </label>
        <input
          type="text"
          // id of user name
          id="email"
          // allow us to set focus on teh input
          ref={userRef}
          // autoComplete is off because we don't want to see previous values suggested for this field.
          autoComplete="off"
          //ties the input to the userState
          onChange={(event) => setUser(event.target.value)}
          // input is also required
          required
          // if we do have a valid username the it is set to false it not the true. This lets a screen annoces if it need adjustment before submission

          aria-invalid={validatedEmail ? "false" : "true"}
          //
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          // when you leave the input field
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && user && !validatedEmail ? "instructions" : "offscreen"
          }
        >
          {/* insert alert icon */}
          Must be a vaild email.
          <br />
        </p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-invalid={validatePwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPasswordFocus(true)}
          // when you leave the input field
          onBlur={() => setPasswordFocus(false)}
        />
        {/* <p
          id="pwdnote"
          className={
            passwordFocus && !validatePwd ? "instructions" : "offscreen"bdsbfd
          }
        >
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:{" "}
          <span aria-label="exclamation mark">!</span>{" "}
          <span aria-label="at symbol">@</span>{" "}
          <span aria-label="hashtag">#</span>{" "}
          <span aria-label="dollar sign">$</span>{" "}
          <span aria-label="percent">%</span>
        </p> */}
        <br />
        <label htmlFor="confirm_pwd">
          Confirm Password:
          {/* <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setPassword(e.target.value)}
          value={confirmedPwd}
          required
          // aria-invalid={validateConfirmedPwd ? "false" : "true"}
          // aria-describedby="confirmnote"
          onFocus={() => setConfirmedPwdFocus(true)}
          onBlur={() => setConfirmedPwdFocus(false)}
        />
        {/* <p
          id="confirmnote"
          className={setConfirmedPwdFocus && ! confirmedPwd ? "instructions" : "offscreen"}
        >
          Must match the first password input field.
        </p> */}

        <button
          disabled={
            !validatedEmail || !validatePwd || !validateConfirmedPwd
              ? true
              : false
          }
        >
          Register
        </button>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          <a href="/signIn">Sign In</a>
        </span>
      </p>
    </section>
  );
}
