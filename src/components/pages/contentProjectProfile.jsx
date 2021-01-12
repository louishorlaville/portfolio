import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";

import projectsData from '../../data/projects.json';

import ProjectInfos from "../project/projectInfos.jsx"
import ProjectPreviews from "../project/projectPreviews.jsx"
import ProjectText from "../project/projectText.jsx"
import ProjectVideo from "../project/projectVideo.jsx"


const cookies = new Cookies();

class ProjectProfile extends Component {
    state = { 
        projectId:this.props.location.state.id,
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

    pathExists = (path) =>{
        try {
            console.log(path);
            return require(`${path}`);
        } 
        catch (err) {
            console.log("okokok");
            return null;
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
        const{listFields} = this.state;
        return ( 
            <div id="contentContainer">
                <div className="projectContentContainer">
                    <div className="projectTitleContainer">
                        <Link to={{pathname:"/projects",state:{fields:listFields}}}  className="backToList ballBackPassive" onMouseEnter={(e)=>this.mouseEnterBack(e)} onMouseLeave={(e)=>this.mouseLeaveBack(e)}>
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
                    {this.pathExists('../../vid/projects/'+projectId+'/project'+projectId+'.mp4')}
                    <div className="projectVideoContainer">
                        <video className="projectVideoPlayer" controls>
                            <source src={'vid/projects/'+projectId+'/project'+projectId+'.mp4'} type="video/mp4"/>
                            <source src={'vid/projects/'+projectId+'/project'+projectId+'.ogg'} type="video/ogg"/>
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProjectProfile;