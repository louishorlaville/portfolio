import React, { Component } from 'react';
import MainSkills from "../home/mainSkills.jsx";
import Resume from "../home/resume.jsx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class ContentHome extends Component {
    state = {}

    componentDidMount() {
        if(cookies.get("scroll")==false){
            cookies.set("scroll",true);
        }
    }

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