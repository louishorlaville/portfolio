import React, { Component } from 'react';

class ProjectLinks extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="projectLinksContainer">
                <div className="artStationLink">
                    <div className="listItemBall">&#10240;</div>
                    Artstation Project Page
                </div>
                <div className="gitHubLink">
                    <div className="listItemBall">&#10240;</div>
                    GitHub Project
                </div>
            </div>
         );
    }
}
 
export default ProjectLinks;