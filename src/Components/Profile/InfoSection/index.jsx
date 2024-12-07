import React from "react";
import About from '../../../Images/about.png'
import './index.css'

const InfoSection = () => {
    return <>
        <div className="info-container">
            <img src={About} className="profile-image"></img>
        </div>
    </>
}

export default InfoSection