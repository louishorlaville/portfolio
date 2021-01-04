import React, { Component } from 'react';
import MainSkills from "./mainSkills.jsx";
import Resume from "./resume.jsx";

class ContentHome extends Component {
    state = {  }
    render() { 
        return (  
            <div id="contentHomeContainer">
                <MainSkills/>
                <Resume/>
            </div>
        );
    }
}
 
export default ContentHome;