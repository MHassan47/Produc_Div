import React, { useRef, useState, useEffect, setState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "./api/axios";
import "./Register.css";

export default function Register({ state, setState }) {
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
    if (validateRegistration())
      console.log("**************SUBMIT LETS GOOOO**************");
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
  };

  return (
    <div className="body">
      <div className="form_layout">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-body">
              <div className="username">
                <label className="form__label" htmlFor="firstName">
                  First Name{" "}
                </label>
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
                <label className="form__label" htmlFor="lastName">
                  Last Name{" "}
                </label>
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
                <label className="form__label" htmlFor="email">
                  Email{" "}
                </label>
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
                <label className="form__label" htmlFor="password">
                  Password{" "}
                </label>
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
                <label className="form__label" htmlFor="confirmPassword">
                  Confirm Password{" "}
                </label>
                <input
                  className="form__input"
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
                  type="text"
                  id="role"
                  placeholder="enter role "
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="footer">
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
