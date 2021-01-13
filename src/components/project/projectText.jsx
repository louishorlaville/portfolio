import React, { Component } from 'react';
import projectsData from '../../data/projects.json';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ProjectText extends Component {
    state = { 
        projectId:this.props.id
    }
    render() { 
        const {projectId} = this.state
        return ( 
            <div className="projectTextContainer">
                <div className="projectTextSeparator" id="projectUpperSeparator">&#10240;</div>
                <div id="projectTextContentContainer">
                    {projectsData[cookies.get("lang")][projectId].text.map((paragraph,id) =>
                        <p key={id}>{paragraph}</p>    
                    )}
                </div>
                <div className="projectTextSeparator" id="projectDownSeparator">&#10240;</div>
            </div>
         );
    }
}
 
export default ProjectText;