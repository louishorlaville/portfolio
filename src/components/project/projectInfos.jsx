import React, { Component } from 'react';
import projects from '../../data/projects.json';

class ProjectInfos extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="projectInfosContainer">
                <div className="projectCollabContainer">
                    <div className="projectCollabTitle projectInfoTitle">made in collaboration with:</div>
                    <div className="projectCollabInfos projectInfo">
                        <p>Gabriel A.P.</p>
                        <p>Sandrine Cryans</p>
                        <p>Diphany Chea</p>
                    </div>
                </div>
                <div className="projectSoftwareContainer">
                    <div className="projectSoftwareTitle projectInfoTitle">software/technology:</div>
                    <div className="projectSoftwareInfos projectInfo">UNITY//C#</div>
                </div>
            </div>
        );
    }
}
 
export default ProjectInfos;