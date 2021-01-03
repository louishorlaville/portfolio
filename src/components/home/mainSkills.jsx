import React, { Component } from 'react';

const MainSkills = () => {
    return ( 
        <div className="mainSkills">
            <ul id="skillList">
                <li id="skillProgrammer" className="skillsListElement"><a href="#" className="skillLink">//PROGRAMMER <div className="boxHoverBehind" id="boxProgrammer">&#10240;</div></a></li>
                <li id="skillDesigner" className="skillsListElement"><a href="#" className="skillLink">//DESIGNER <div className="boxHoverBehind" id="boxDesigner">&#10240;</div></a></li>
            </ul>
        </div>
    );
}
 
export default MainSkills;