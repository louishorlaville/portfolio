import React, { Component } from 'react';
import homeData from '../../data/home.json';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Resume = () => {
    return ( 
        <div id="homeResumeContainer">
            <div id="resumeContainer">
                <div id="borderResume"></div>
                <p className="resumeElement" id="resumeP1">
                    {homeData[cookies.get("lang")].resume[0]}<span className="highlightYellow">{homeData[cookies.get("lang")].resumeHighlight[0]}</span>
                    {homeData[cookies.get("lang")].resume[1]}<span className="highlightPink">{homeData[cookies.get("lang")].resumeHighlight[1]}</span>
                    {homeData[cookies.get("lang")].resume[2]}<span className="highlightBlue">{homeData[cookies.get("lang")].resumeHighlight[2]}</span>
                    {homeData[cookies.get("lang")].resume[3]}<span className="highlightGrey">{homeData[cookies.get("lang")].resumeHighlight[3]}</span>
                </p>
                <p className="resumeElement" id="resumeP2">{homeData[cookies.get("lang")].resume[5]}</p>
            </div>
        </div>
     );
}
 
export default Resume;