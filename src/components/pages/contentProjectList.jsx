import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import projects from '../../data/projects.json';

const cookies = new Cookies();

class ContentProjectList extends Component {

    state = {  }
    render() { 
        return (  
            <div id="contentContainer">
                <div className="listContainer">
                    <div className="listTitleContainer">
                        <div className="listTitle">//DESIGNER</div>
                    </div>
                    <div className="listField">
                        <div className="listFieldTitle">//WEB DESIGN</div>
                        <div className="listItem">
                            <div className="listItemTitle">
                                cegep's website
                                <p className="listItemSoftware">ILLUSTRATOR//PHOTOSHOP</p>
                                <p className="listItemDate">fall 2018</p>
                                <div className="boxHoverBehind">&#10240;</div>
                                <div className="listItemBall">&#10240;</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                /* {projects[cookies.get("lang")].map((project, i)=>{
                    return(
                        <p key={i}>{project.title}</p>
                    )
                })} */
        );
    }
}
 
export default ContentProjectList;