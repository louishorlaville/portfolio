import React, { Component } from 'react';
import {Link} from "react-router-dom";

const MainSkills = () => {
    return ( 
        <div className="mainSkills">
            <ul id="skillList">
                <li id="skillProgrammer" className="skillsListElement"><Link to="/projects" className="skillLink">//PROGRAMMER <div className="boxHoverBehind" id="boxProgrammer">&#10240;</div></Link></li>
                <li id="skillDesigner" className="skillsListElement"><Link to="/projects" className="skillLink">//DESIGNER <div className="boxHoverBehind" id="boxDesigner">&#10240;</div></Link></li>
            </ul>
        </div>
    );
}
 
export default MainSkills;