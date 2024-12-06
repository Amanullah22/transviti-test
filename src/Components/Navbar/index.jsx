import React from "react";
import './index.css';
import logo from '../../Images/main_icon.png'
import profile from '../../Images/profile.png'
import Button from "../GenericButton";

const NavBar = () => {
    return <>
        <div className="navbar-main">
            <div className="icon-container">
                <img src={logo} className="logo" alt={"logo"} />
            </div>
            <div className="links-container">
                <a href='#' className="find">Find Jobs</a>
                <a href='#'>Top Companies</a>
                <a href='#'>Job Tracker</a>
                <a href='#'>Job Calendar</a>
                <a href='#'>Documents</a>
                <a href='#'>Messages</a>
                <a href='#'>Notifications</a>
            </div>
            <div className="search-container">
                <input className="search_field" placeholder="Search" />
            </div>
            <div className="profile-container">
                <div className="btn-container">
                    <Button content={'Resume Builder'} />
                </div>
                <div className="dp-container">
                    <img src={profile} alt="profile" className="profile"></img>
                </div>
            </div>
        </div>
    </>
}

export default NavBar