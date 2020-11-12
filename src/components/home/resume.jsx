import React, { Component } from 'react';

const Resume = () => {
    return ( 
        <div id="homeResumeContainer">
            <div id="resumeContainer">
                <div id="borderResume"></div>
                <p className="resumeElement" id="resumeP1">Hi! My name is Louis Horlaville and I’m a
                Montreal-based college student who loves <span className="highlightYellow">programming</span> and building <span className="highlightPink">visually interesting</span> interfaces. 
                I specialize in <span className="highlightBlue">video games</span> and <span className="highlightGrey">websites</span></p>
                <p className="resumeElement" id="resumeP2">I have vast set of skills, ranging from the 
                web’s front and back end HTML/CSS/javascript/PHP/MySQL, all the way to video games with Unity and C#.</p>
            </div>
        </div>
     );
}
 
export default Resume;