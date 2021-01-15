import React, { Component } from 'react';
import projects from '../../data/projects.json';
import ImgGallery from './imageGallery.jsx'

class ProjectPreviews extends Component {
    state = { 
        projectId:this.props.id,
        imgIndex:[1,2,3]
    }

    displayGallery=(e)=>{
        console.log(e)
        return(
            <imgGallery projectId={this.state.projectId} imageId={e}/>
        )
    }

    render() { 
        const {projectId} = this.state;
        const {imgIndex} = this.state;
        return (    
            <div className="projectPreviewsContainer">
                {/* <Image source='../../img/projects/0/1.jpg'/> */}
                {console.log(this.state.projectId)}
                {imgIndex.map(imageId=>
                    <img className="projectPreviewImg" onClick={()=>this.displayGallery(imageId)} key={imageId} src={'../../img/projects/'+projectId+'/'+imageId+'.jpg'} alt="project screenshot"/>
                )}
                <ImgGallery projectId={this.state.projectId} imageId={1}/>
            </div>
        );
    }
}
 
export default ProjectPreviews;