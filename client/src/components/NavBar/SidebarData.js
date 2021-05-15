import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Profile",
        path: "/profile",
        icon: <FaIcons.FaUser/>,
        cName: "nav-text"
    },
    {
        title: "Friends",
        path: "/friends",
        icon: <FaIcons.FaUserFriends/>,
        cName: "nav-text"
    },
    {
        title: "Meets",
        path: "/meets",
        icon: <FaIcons.FaRegCalendarCheck/>,
        cName: 'nav-text'
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <AiIcons.AiFillMessage/>,
        cName: 'nav-text'
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <AiIcons.AiFillSetting/>,
        cName: 'nav-text'
    },
    {
        title: "Log Out",
        path: "/logout",
        icon: <IoIcons.IoMdLogOut/>,
        cName: 'nav-text'
    },
]