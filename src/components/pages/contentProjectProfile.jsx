import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import projectsData from '../../data/projects.json';

import ProjectInfos from "../project/projectInfos.jsx"
import ProjectPreviews from "../project/projectPreviews.jsx"
import ProjectText from "../project/projectText.jsx"
import ProjectVideo from "../project/projectVideo.jsx"


const cookies = new Cookies();

class ProjectProfile extends Component {
    state = { 
        projectId:this.props.location.state.id
     }

    render() { 
        const{projectId} = this.state;
        return ( 
            <div id="contentContainer">
                <div className="projectContentContainer">
                    <div className="projectTitleContainer">
                        <div className="backToList ballBackPassive">
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                        </div>
                        <div className="projectTitle">
                            //{projectsData[cookies.get("lang")][projectId].title.toUpperCase()}
                        </div>
                    </div>
                    <ProjectInfos id={this.state.projectId}/>
                    <ProjectPreviews id={this.state.projectId}/>
                    <ProjectText id={this.state.projectId}/>
                    <ProjectVideo id={this.state.projectId}/>
                </div>
            </div>
        );
    }
}
 
export default ProjectProfile;