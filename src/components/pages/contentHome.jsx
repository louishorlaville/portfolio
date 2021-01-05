import React, { Component } from 'react';
import MainSkills from "../home/mainSkills.jsx";
import Resume from "../home/resume.jsx";

class ContentHome extends Component {
    state = {  }
    render() { 
        return (  
            <div id="contentContainer">
                <MainSkills/>
                <Resume/>
            </div>
        );
    }
}

export default ContentHome;