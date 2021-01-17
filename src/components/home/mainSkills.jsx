import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import homeData from '../../data/home.json';

const cookies = new Cookies();

const MainSkills = () => {

    return ( 
        <div className="mainSkills">
            <ul id="skillList">
                <li id="skillProgrammer" className="skillsListElement"><Link to={{pathname:"/portfolio/projects",state:{fields:[2,3]}}} className="skillLink">//{homeData[cookies.get("lang")].menu[0].toUpperCase()} <div className="boxHoverBehind" id="boxProgrammer">&#10240;</div></Link></li>
                <li id="skillDesigner" className="skillsListElement"><Link to={{pathname:"/portfolio/projects",state:{fields:[4,1,0]}}} className="skillLink">//{homeData[cookies.get("lang")].menu[1].toUpperCase()} <div className="boxHoverBehind" id="boxDesigner">&#10240;</div></Link></li>

            </ul>
        </div>
    );
}
 
export default MainSkills;