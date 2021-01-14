import React, { Component } from 'react';

class ContentMyWork extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentContainer">
                <div className="myWorkContainer">
                    <div className="myWorkTitleContainer">
                        <div className="myWorkTitle">//MY WORK</div>
                    </div>
                    <div className="myWorkContent">
                        <div className="myWorkItem">
                            <div className="myWorkItemTitleContainer">
                                <div className="myWorkItemTitle">cegep's department website</div>
                            </div>
                            <div className="myWorkItemPreviewContainer">
                                <img src='../../img/projects/1/1.jpg' className="myWorkItemPreview"/>
                                <div className="myWorkItemPreviewInfos">
                                    <div className="myWorkItemPreviewDate">fall 2020</div>
                                    <div className="myWorkItemPreviewDate">HTML//CSS//Js//PHP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default ContentMyWork;