import React, { useContext } from "react";
import "./SideBar.css";
import { SidebarData } from "./SideBarData";
import Logout from "../Auth/Logout";
import { AuthContext } from "../../context/AuthProvider";

export default function SideBar() {
  const { user } = useContext(AuthContext);

  return user ? (
    <div className="Sidebar">
      <ul className="SidebarList">
        <div className="user_profile">
          <div className="user_profile_picture">
            <img src={user.photo_url} />
          </div>
          <div className="user_profile_name">
            {`${user.first_name} ${user.last_name}`}
          </div>
        </div>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
        <li className="row">
          <Logout />
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
}
