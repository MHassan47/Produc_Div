import React, { useRef, useState, useEffect, setState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "./api/axios";
import './Register.css'



export default function Register(props) {
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  
  // const navigate = useNavigate();


  const handleSubmit = async (event) => {
    // event.preventDefault()
    console.log("**************SUBMIT LETS GOOOO**************")
    const body = {
      first_name,
      last_name,
      email,
      password,
      confirmPassword
    }

    try {
      const { data } = await axios.post('/users/register', body)
      console.log("+++++++++++++++data:  ", data)
    } catch (error) {
      console.log("----------- error:  ", error)
    }
  
  }
  
  return (
    <div className="form">
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">First Name </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="lastname">
            <label className="form__label" htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="password">
            <label className="form__label" htmlFor="password">Password </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}

              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={(event) => handleSubmit()}>Register</button>
        </div>
      </form>
    </div>
  )
}



