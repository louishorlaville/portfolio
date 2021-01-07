import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import projects from '../../data/projects.json';

const cookies = new Cookies();

class ContentProjectList extends Component {

    state = { 
        msg:"bruhbruhbruh",
        fieldsID:[],
        skillTitle:{
            "en":["PROGRAMMER","DESIGNER"],
            "fr":["PROGRAMMEUR", "DESIGNER"]
        }    
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
            }
        }
        return currentProjects;
    }

    handleSkillSwitch = (skillClicked) =>{
        this.resetFields();
        let temp = [];
        if(skillClicked!=0){
            temp=[1,0];
        }
        else{
            temp=[2,3];
        }
        this.setState({fieldsID:temp});

    }

    resetFields(){
        this.setState({fieldsId:[]});
    }


    render() { 
        const { fieldsID } = this.state;
        const { skillTitle } = this.state;
        return (  
            <div id="contentContainer">
                <div className="listContainer">
                    <div className="listTitleContainer">
                        <div className="listTitle">
                            <a id="listTitleDesigner" className={(this.state.fieldsID[0]!=1)?"activeListTitle":"inactiveListTitle"} onClick={() => this.handleSkillSwitch(0)}>{skillTitle[cookies.get("lang")][0]} </a>//
                            <a id="listTitleProgrammer" className={(this.state.fieldsID[0]==1)?"activeListTitle":"inactiveListTitle"} onClick={() => this.handleSkillSwitch(1)}> {skillTitle[cookies.get("lang")][1]}</a> 
                        </div>
                    </div>
                    {/* MAP THE FIELD DEPENDING ON THE SELECTED CATEGORY */}
                    {fieldsID.map((field,fIndex)=>{
                        return(
                        <div key={fIndex} className="listField">
                            <div className="listFieldTitle">//{this.getCurrentField(field)}</div>
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
                            <div className="listSeparator">&#10240;</div>
                            </div>
                        )
                    })}                    
                </div>
            </div>
        );
    }
}
 
export default ContentProjectList;