import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";

import projectsData from '../../data/projects.json';

import ProjectInfos from "../project/projectInfos.jsx"
import ProjectPreviews from "../project/projectPreviews.jsx"
import ProjectText from "../project/projectText.jsx"
import ProjectVideo from "../project/projectVideo.jsx"
import ProjectLinks from "../project/projectLinks.jsx"

const cookies = new Cookies();

class ProjectProfile extends Component {
    state = { 
        projectId:this.props.location.state.id,
        pageFrom:this.props.location.state.from,
        listFields:[1,0]
    }

    componentDidMount(){
        if(projectsData[cookies.get("lang")][this.state.projectId].fieldId==0 || projectsData[cookies.get("lang")][this.state.projectId].fieldId==1 || projectsData[cookies.get("lang")][this.state.projectId].fieldId==4){
            this.setState({listFields:[4,1,0]});
        }
        else{
            this.setState({listFields:[2,3]});
        }

    }

    videoExists = (projectId) =>{
        if(projectsData[cookies.get("lang")][projectId].video.length!==0){
            return(
                <ProjectVideo id={this.state.projectId}/>         
            )
            
        }
    };
    

    mouseEnterBack= (e) =>{
        e.target.classList.remove("ballBackPassive");
        e.target.classList.add("ballBackActive");

    }
    mouseLeaveBack= (e) =>{
        e.target.classList.add("ballBackPassive");
        e.target.classList.remove("ballBackActive");
    }

    render() { 
        // const vid = require('../vid/projects/'+projectId+'/project'+projectId+'.mp4');
        const{projectId} = this.state;
        const{pageFrom} = this.state;
        const{listFields} = this.state;
        return ( 
            <div id="contentContainer">
                {console.log(projectId)}
                <div className="projectContentContainer">
                    <div className="projectTitleContainer">
                        <Link to={{pathname:(pageFrom=='myWork')?'/myWork':'/projects',state:{fields:listFields}}}  className="backToList ballBackPassive" onMouseEnter={(e)=>this.mouseEnterBack(e)} onMouseLeave={(e)=>this.mouseLeaveBack(e)}>
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                            <div className="ballBack">&#10240;</div>
                        </Link>
                        <div className="projectTitle">
                            //{projectsData[cookies.get("lang")][projectId].title.toUpperCase()}
                        </div>
                    </div>
                    <ProjectInfos id={this.state.projectId}/>
                    <ProjectPreviews id={this.state.projectId}/>
                    <ProjectText id={this.state.projectId}/>
                    <div className="projectBottomContainer">
                        {this.videoExists(projectId)}
                        <ProjectLinks id={this.state.projectId}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProjectProfile;