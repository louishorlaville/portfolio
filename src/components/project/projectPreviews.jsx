import React, { Component } from 'react';
import projects from '../../data/projects.json';
import imgPreview from "../../img/projects/0/1.jpg"

class ProjectPreviews extends Component {
    state = {  }
    render() { 
        return (    
            <div className="projectPreviewsContainer">
                <img src={imgPreview} alt="project screenshot"/>
                <img src={imgPreview} alt="project screenshot"/>
                <img src={imgPreview} alt="project screenshot"/>
            </div>
        );
    }
}
 
export default ProjectPreviews;