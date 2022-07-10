import React from 'react'

export default function Register() {
  return (
    <div>Register</div>
  )
}


























// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, FaInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// // validate user with userRegValidation - "[a-zA-Z]" = username must start with uppercase letter,  "[a-zA-Z0-9-_]{3,23}" = must then be followed up with any number of character between 3-23, lower or upper case, hyphen, or underscore.
// // const userRegValidation = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// // validate user with pwdRegValidation = "(?=.*[a-z])" - must have a lowercase letter, "^(?=.*[A-Z])" - must have 1 uppercase letter, "(?=.*[0-9])" - must have a number, and "(?=.*[!@#$%])" - must have a special character
// const pwdRegValidation =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const Register = () => {
//   // user input, allow us to set focus to user input when the component loads
//   const userRef = useRef();
//   // for the error message, so if we get an error it can be announced by a screen reader for accessibility
//   const errRef = useRef();

//   // tied to the user input
//   const [user, setUser] = useState("");

//   // boolean tied to whether the name vaildates or not
//   const [validatedEmail, setValidatedEmail] = useState(false);

//   // boolean tied to whether we have focus on that input field or not
//   const [userFocus, setUserFocus] = useState(false);

//   const [password, setPassword] = useState("");
//   const [validatePwd, setValidatePwd] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);

//   const [confirmedPwd, setConfirmedPwd] = useState("");
//   const [validateConfirmedPwd, setValidateConfirmedPwd] = useState(false);
//   const [confirmedPwdFocus, setConfirmedPwdFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   // setting the focus on the userName when the component loads. userRef = refernce the user
//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   // validate the username, add user state to the dependency arr.
//   useEffect(() => {
//     //.test is testing the user state against the userRegValidation and if it is validated then the result will be passed to the setValidatedName useState.
//     const result = user;
//     // userRegValidation.test(user);
//     console.log(result);
//     console.log(user);
//     setValidatedEmail(result);
//   }, [user]);

//   useEffect(() => {
//     const result = pwdRegValidation.test(password);
//     console.log(result);
//     console.log(password);
//     setValidatePwd(result);
//     const confirmed = password === confirmedPwd;
//     setvalidateConfirmedPwd(confirmed);
//     //password state in the dependency array
//   }, [password, confirmedPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, password, confirmedPwd]);

//   return (
//     <section>
//       {/* the code below will hold the errMsg if one exist the ternary operator will then apply the errMsg className. Otherwise the errMsg will display waaaay offscreen*/}
//       <p ref={errRef} className={errMsg ? "error message" : "offscreen"}
//         aria-live="assertive">{errMsg}
//       </p>
//       <h1>Register</h1>
//       <form>
//         <label htmlFor="username">
//           Username:
//         </label>
//         <input
//           type="text"
//           // id of user name
//           id="username"
//           // allow us to set focus on teh input
//           ref={userRef}
//           // autoComplete is off because we don't want to see previous values suggested for this field.
//           autoComplete="off"
//           //ties the input to the userState
//           onChange={(event) => setUser(event.target.value)}
//           // input is also required
//           required
//           // if we do have a valid username the it is set to false it not the true. This lets a screen annoces if it need adjustment before submission 
          
//           aria-invalid={validatedEmail ? "false" : "true"}
//           // 
//           aria-describedby="uidnote"

//           onFocus={() => setUserFocus(true)}
//           // when you leave the input field
//           onBlur={() => setUserFocus(false)}
//           />
//           <p id="uidnote" className={userFocus && user && !validatedEmail ? "instructions" : "offscreen"}>
//             <FontAwesomeIcon icon={FaInfoCircle} />
//             Must be a vaild email.<br />
//           </p>
//       </form>
//     </section>
//   );
// };

// export default Register;
