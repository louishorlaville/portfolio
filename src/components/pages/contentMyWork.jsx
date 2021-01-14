import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";

import projectsData from '../../data/projects.json';

const cookies = new Cookies();

class ContentMyWork extends Component {
    state = {}
    render() { 
        return ( 
            <div className="contentContainer">
                <div className="myWorkContainer">
                    <div className="myWorkTitleContainer">
                        <div className="myWorkTitle">//MY WORK</div>
                    </div>
                    <div className="myWorkContent">
                        {projectsData[cookies.get("lang")].map((project,index)=>{
                            return(
                            <Link to={{pathname:"/projectProfile",state:{id:project.id,from:'myWork'}}} key={index} className="myWorkItem">
                                <div className="myWorkItemTitleContainer">
                                    <div className="myWorkItemTitle">{project.title}</div>
                                </div>
                                <div className="myWorkItemPreviewContainer">
                                    <img src={'../../img/projects/'+project.id+'/1.jpg'} className="myWorkItemPreview"/>
                                    <div className="myWorkItemPreviewInfos">
                                        <div className="myWorkItemPreviewField">{project.fieldName}</div>
                                        <div className="myWorkItemPreviewDate">{project.date}</div>
                                        <div className="myWorkItemPreviewSoftware">{project.software}</div>
                                    </div>
                                </div>
                            </Link>
                            );
                        })}
                        
                    </div>
                </div>

            </div>
        );
    }
}
 
export default ContentMyWork;