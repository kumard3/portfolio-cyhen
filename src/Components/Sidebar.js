import React from "react";
import sidebarlogo from "../images/sidebarlogo.png";
import homeicon from "../images/homeicon.png"
import { Link } from "react-router-dom";
import about from "../images/about.png"
import skills from "../images/skills.png"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar_logo" src={sidebarlogo} alt="cyphen-logo"/>
        <div className="sidebar_icon">
            <nav className="sidebar_icon_nav">
            <Link  to='/home'><div className="sidebar-all-icons"><img className="homeicons" src={homeicon} alt="home-icon"/></div></Link>
            <Link to='/about'><div className="sidebar-all-icons"><img  className="abouticon" src={about}/></div></Link>
            <Link to='/skills'><div className="sidebar-all-icons"><img className="skillsicon" src={skills}/></div></Link>
            <Link to='/skills'><div className="sidebar-all-icons"><img className="skillsicon" src={skills}/></div></Link>
            <Link to='/skills'><div className="sidebar-all-icons"><img className="skillsicon" src={skills}/></div></Link>
            </nav>
           </div>
        <div className="sidebar_links"></div>
        <div className="sidebar_social"></div>
    </div>
  );
};

export default Sidebar;
