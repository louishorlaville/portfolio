import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import homeData from '../../data/home.json';

const cookies = new Cookies();

const MainSkills = () => {

    return ( 
        <div className="mainSkills">
            <ul id="skillList">
                <li id="skillProgrammer" className="skillsListElement"><Link to={{pathname:"/projects",state:{fields:[1]}}} className="skillLink">//{homeData[cookies.get("lang")].menu[0].toUpperCase()} <div className="boxHoverBehind" id="boxProgrammer">&#10240;</div></Link></li>
            </ul>
        </div>
    );
}
 
export default MainSkills;