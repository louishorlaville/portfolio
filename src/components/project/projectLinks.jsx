import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import projectsData from '../../data/projects.json';
import projectProfileData from '../../data/projectProfile.json';

const cookies = new Cookies();





class ProjectLinks extends Component {
    state = { 
        projectId:this.props.id,
        artstation:false,
        github:false
     }

    componentDidMount(){
        this.setState({
            artstation:(projectsData[cookies.get("lang")][this.state.projectId].artstation.length!=0)?true:false,
            github:(projectsData[cookies.get("lang")][this.state.projectId].github.length!=0)?true:false
        })
     }


    ArtstationLink = (link) => {
        return ( 
            <a className="linkItem" href={link} target="_blank">
                <div className="linkItemBall">&#10240;</div>
                {projectProfileData[cookies.get("lang")]["link"][0]}
            </a>
        );
    }

    GithubLink = (link) => {
        return ( 
            <a className="linkItem" href={link} target="_blank">
                <div className="linkItemBall">&#10240;</div>
                {projectProfileData[cookies.get("lang")]["link"][1]}
            </a>
        );
    }

    render() { 
        return ( 
            <div className="projectLinksContainer">
                {(this.state.artstation)?this.ArtstationLink(projectsData[cookies.get("lang")][this.state.projectId].artstation):null}
                {(this.state.github)?this.GitHubLink(projectsData[cookies.get("lang")][this.state.projectId].github):null}
            </div>
         );
    }
}


 
export default ProjectLinks;