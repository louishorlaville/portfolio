import React, { Component } from 'react';
import projects from '../../data/projects.json';
import ImgGallery from './imageGallery.jsx'

class ProjectPreviews extends Component {
    state = { 
        projectId:this.props.id,
        imgIndex:[1,2,3],
        galleryRender:false,
        imageToGallery:1
    }

    displayGallery=(e)=>{
        this.handleGalleryMount(e);
    }

    handleGalleryMount=(e)=>{
        this.setState({galleryRender:true,imageToGallery:e});
    }

    handleGalleryUnmount=()=>{
        this.setState({galleryRender:false});
    }

    render() { 
        const {projectId} = this.state;
        const {imgIndex} = this.state;
        return (    
            <div className="projectPreviewsContainer">
                {/* <Image source='../../img/projects/0/1.jpg'/> */}
                {imgIndex.map(imageId=>
                    <img className="projectPreviewImg" onClick={()=>this.displayGallery(imageId)} key={imageId} src={'./img/projects/0/1.jpg'} alt="project screenshot"/>
                )}
                {this.state.galleryRender? <ImgGallery projectId={this.state.projectId} imageId={this.state.imageToGallery} unmountMe={this.handleGalleryUnmount}/> :null}
            </div>
        );
    }
}
 
export default ProjectPreviews;