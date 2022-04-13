import React, { Component } from 'react';

class ImageGallery extends Component {
    state = { 
        projectId:this.props.projectId,
        imageId:this.props.imageId,
        images:[1,2,3]
     }

    componentDidMount() {
        this.setState({imageId:this.props.imageId})
    }

    switchLeftRight=(direction, imageId)=>{
        let allow = (direction==1)? (imageId+1!==4):(imageId-1!==0);
        if(allow){
            this.setState({imageId:(direction==1)?imageId+1:imageId-1});
        }
    }

    switchImg=(id)=>{
        this.setState({imageId:id})
    }

    unmount=()=>{
        this.props.unmountMe();
    }

    render() { 
        const {projectId} = this.state;
        const {imageId} = this.state;
        return ( 
            <div className="galleryContainer">
                <div className="galleryContainerBackground">&#10240;</div>
                <div className="galleryContentContainer">
                    <div className="galleryExpandedImg">
                        <div className="gallerExpandedImgContainer">
                            <div className="exitGallery" onClick={this.unmount}>&#10240;</div>
                            <div id="galleryNavLeft" className="galleryExpandedNavBox" onClick={()=>this.switchLeftRight(0, imageId)}>
                                <div id="navLeftSymbol" className="navSymbol">&#10240;</div>
                            </div>
                            {console.log(imageId)}
                            <img id="galleryExpandedImgContent" src={'./img/projects/'+projectId+'/'+imageId+'.jpg'} alt=""/>
                            <div id="galleryNavRight" className="galleryExpandedNavBox" onClick={()=>this.switchLeftRight(1, imageId)}>
                                <div id="navRightSymbol" className="navSymbol">&#10240;</div>
                            </div>
                        </div>
                    </div>
                    <div className="galleryImgRowContainer">
                    {this.state.images.map(imageId=>
                        <div key={imageId} className="galleryImgRowItem" onClick={()=>this.switchImg(imageId)}>
                            <img src={'./img/projects/'+projectId+'/'+imageId+'.jpg'} alt=""/>
                        </div>
                    )}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ImageGallery;