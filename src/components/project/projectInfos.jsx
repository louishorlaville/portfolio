import React, { Component } from 'react';
import projectsData from '../../data/projects.json';
import projectInfos from '../../data/projectProfile.json';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ProjectInfos extends Component {
    state = { 
        projectId:this.props.id,
        collab:false
    }

    componentDidMount(){
        if(projectsData[cookies.get("lang")][this.state.projectId].collab.length>0){
            this.setState({collab:true});
        }
    }

    renderCollab=()=>{
        if(this.state.collab===true){
            return(
                <div className="projectCollabContainer">
                    <div className="projectCollabTitle projectInfoTitle">{projectInfos[cookies.get("lang")]["infos"][0]}</div>
                    <div className="projectCollabInfos projectInfo">
                        {projectsData[cookies.get("lang")][this.state.projectId].collab.map((name,id) =>
                            <p key={id} className="projectCollabInfos projectInfo">{name}</p>    
                        )}
                    </div>
                </div>
            )
        }
    }

    render() { 
        return ( 
            <div className="projectInfosContainer">
                {this.renderCollab()}
                <div className="projectSoftwareContainer">
                    <div className="projectSoftwareTitle projectInfoTitle">{projectInfos[cookies.get("lang")]["infos"][1]}</div>
                    <div className="projectSoftwareInfos projectInfo">{projectsData[cookies.get("lang")][this.state.projectId].software}</div>
                </div>
            </div>
        );
    }
}
 
export default ProjectInfos;