import React, { Component } from 'react';
import {Link} from "react-router-dom";

const MainSkills = () => {
    return ( 
        <div className="mainSkills">
            <ul id="skillList">
                <li id="skillProgrammer" className="skillsListElement"><Link to={{pathname:"/projects",state:{fields:[3,2]}}} className="skillLink">//PROGRAMMER <div className="boxHoverBehind" id="boxProgrammer">&#10240;</div></Link></li>
                <li id="skillDesigner" className="skillsListElement"><Link to={{pathname:"/projects",state:{fields:[1,0]}}} className="skillLink">//DESIGNER <div className="boxHoverBehind" id="boxDesigner">&#10240;</div></Link></li>
            </ul>
        </div>
    );
}
 
export default MainSkills;