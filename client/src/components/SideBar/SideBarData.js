import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import { MdLogout } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Chat",
    icon: <MailIcon />,
    link: "/chat",
  },
  {
    title: "Conference",
    icon: <GroupIcon />,
    link: "/conference",
  },
  // {
  //   title: "Logout",
  //   icon: <MdLogout className="md_logout_icon" onClick={}/>,
  //   link: "/",
  // },
];
