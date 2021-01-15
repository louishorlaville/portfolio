import React, { Component } from 'react';

class ImageGallery extends Component {
    state = { 
        projectId:this.props.projectId,
        imageId:this.props.imageId
     }
    render() { 
        const {projectId} = this.state;
        const {imageId} = this.state;
        return ( 
            <div className="galleryContainer">
                <div className="galleryContainerBackground">&#10240;</div>
                <div className="galleryContentContainer">
                    <div className="galleryExpandedImg">
                        <div id="galleryNavLeft" className="galleryExpandedNavBox">
                            <div id="navLeftSymbol" className="navSymbol">&#10240;</div>
                        </div>
                        <img id="galleryExpandedImgContent" src={'../../img/projects/'+projectId+'/'+imageId+'.jpg'} alt=""/>
                        <div id="galleryNavRight" className="galleryExpandedNavBox">
                            <div id="navRightSymbol" className="navSymbol">&#10240;</div>
                        </div>
                    </div>
                    <div className="galleryImgRowContainer">
                        <div className="galleryImgRowItem">
                            <img src={'../../img/projects/'+projectId+'/1.jpg'} alt=""/>
                        </div>
                        <div className="galleryImgRowItem">
                            <img src={'../../img/projects/'+projectId+'/2.jpg'} alt=""/>
                        </div>
                        <div className="galleryImgRowItem">
                            <img src={'../../img/projects/'+projectId+'/3.jpg'} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ImageGallery;