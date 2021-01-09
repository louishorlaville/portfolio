import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import projectsData from '../../data/projects.json';

import ProjectInfos from "../project/projectInfos.jsx"
import ProjectPreviews from "../project/projectPreviews.jsx"
import ProjectText from "../project/projectText.jsx"


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
                        <div className="backToList">
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                        </div>
                        <div className="projectTitle">
                            //{projectsData[cookies.get("lang")][projectId].title.toUpperCase()}
                        </div>
                    </div>
                    <ProjectInfos/>
                    <ProjectPreviews id={this.state.projectId}/>
                    <ProjectText/>
                </div>
            </div>
        );
    }
}
 
export default ProjectProfile;