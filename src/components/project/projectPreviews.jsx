import React, { Component } from 'react';
import projects from '../../data/projects.json';
import imgPreview from "../../img/projects/0/1.jpg"


class ProjectPreviews extends Component {
    state = { 
        projectId:this.props.id,
        imgIndex:[1,2,3]
     }

    render() { 
        const {projectId} = this.state;
        const {imgIndex} = this.state;
        return (    
            <div className="projectPreviewsContainer">
                {/* <Image source='../../img/projects/0/1.jpg'/> */}
                {console.log(this.state.projectId)}
                {imgIndex.map(imageId=>
                    <img src={'../../img/projects/'+projectId+'/'+imageId+'.jpg'} alt="project screenshot"/>
                )}
            </div>
        );
    }
}
 
export default ProjectPreviews;