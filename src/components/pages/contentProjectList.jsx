import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import projects from '../../data/projects.json';

const cookies = new Cookies();

class ContentProjectList extends Component {

    state = { 
        fieldsID:[],     
    }

    componentDidMount(){
        const {fields} = this.props.location.state;
        this.handleFields(fields)
    }

    handleFields=(fieldsData)=>{
        this.setState({fieldsID:fieldsData});
    }


    /*Return the field we are currently in when function called*/
    getCurrentField(field){
        for(let i=0;i<projects[cookies.get("lang")].length;i++){
            if(projects[cookies.get("lang")][i].fieldId===field){
                return projects[cookies.get("lang")][i].fieldName;
            }
        }
    }

    /*Return the projects of the current field when function called*/
    getCurrentProjects(field){
        let currentProjects=[];
        let indexProjects=-1;
        for(let i=0;i<projects[cookies.get("lang")].length;i++){
            if(projects[cookies.get("lang")][i].fieldId===field){
                indexProjects++;
                currentProjects[indexProjects]=projects[cookies.get("lang")][i];
                console.log(currentProjects);
                
            }
        }
        return currentProjects;
    }


    render() { 
        const { fieldsID } = this.state;
        return (  
            <div id="contentContainer">
                <div className="listContainer">
                    <div className="listTitleContainer">
                        <div className="listTitle">//DESIGNER</div>
                    </div>
                    {/* MAP THE FIELD DEPENDING ON THE SELECTED CATEGORY */}
                    {fieldsID.map((field,fIndex)=>{
                        return(
                        <div key={fIndex} className="listField">
                            <div className="listFieldTitle">{this.getCurrentField(field)}</div>
                            {/* MAP THE PROJECTS DEPENDING ON THE CURRENT FIELD */}
                            {this.getCurrentProjects(field).map((project,pIndex)=>{
                                return(
                                <div key={pIndex} className="listItem">
                                    <div className="listItemTitle">
                                        {project.title}
                                        <p className="listItemSoftware">{project.software}</p>
                                        <p className="listItemDate">{project.date}</p>
                                        <div className="boxHoverBehind">&#10240;</div>
                                        <div className="listItemBall">&#10240;</div>
                                    </div>
                                </div>
                                );
                            })}
                            </div>
                        )
                    })}
                    {/* /<div className="listField">
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
                        <div className="listItem">
                            <div className="listItemTitle">
                                cegep's website
                                <p className="listItemSoftware">ILLUSTRATOR//PHOTOSHOP</p>
                                <p className="listItemDate">fall 2018</p>
                                <div className="boxHoverBehind">&#10240;</div>
                                <div className="listItemBall">&#10240;</div>
                            </div>
                        </div>
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
                    <div className="listSeparator">&#10240;</div> */}
                    
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