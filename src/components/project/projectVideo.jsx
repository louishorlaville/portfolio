import React, { Component } from 'react';

class ProjectVideoPlayer extends Component {
    state = {  
        projectId:this.props.id,
    }

    render() { 
        const {projectId} = this.state;
        return (
            <div className="projectVideoContainer">
                <video className="projectVideoPlayer" controls>
                    <source src={'../../vid/projects/'+projectId+'/project'+projectId+'.mp4'} type="video/mp4"/>
                    <source src={'../../vid/projects/'+projectId+'/project'+projectId+'.ogg'} type="video/ogg"/>
                </video>
            </div>
         );
    }
}
 
export default ProjectVideoPlayer;