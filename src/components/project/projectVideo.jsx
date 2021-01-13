import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import projectsData from '../../data/projects.json';

const cookies = new Cookies();
class ProjectVideoPlayer extends Component {
    state = {  
        projectId:this.props.id,
    }

    render() { 
        const {projectId} = this.state;
        return (
            <div className="projectVideoContainer">
                 <iframe width="560" height="315" src={projectsData[cookies.get("lang")][projectId].video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                    allowFullScreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen">
                </iframe>
            </div>
         );
    }
}
 
export default ProjectVideoPlayer;