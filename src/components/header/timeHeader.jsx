import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class TimeLocation extends Component {

    componentDidMount(){

    }

    languageSwitchHandler=(e)=>{
        /*Check if active language is the same as user clicked*/
        if(e.target.id!=cookies.get("lang")){
            if(e.target.id==="fr"){
                cookies.set("lang","fr");
            }
            else{
                cookies.set("lang","en")
            }
            this.sendData();
        }

        /*CSS style for the background*/
        //box.className=cookies.get("lang")+"Selected"
    }

    sendData = () =>{
        this.props.parentCallback(cookies.get("lang"));
    }

    render() { 
        return ( 
            <div className="timeContainer headerItems">
                <div className="timeItem" id="timeClock"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Montreal'} /></div>
                <div className="timeItem highlightYellow" id="timeLocation">Montréal, Canada</div>
                <div className="timeItem" id="timeLanguage">
                    <span className="languageItem" id="en" onClick={((e)=>this.languageSwitchHandler(e))}>English </span> 
                    // 
                    <span className="languageItem" id="fr" onClick={((e)=>this.languageSwitchHandler(e))}> Français</span>
                    <div className={(cookies.get("lang")=="fr")?"frSelected":"enSelected"} id="selectedLanguageBackground">&#10240;</div>
                </div>
            </div>
            
         );
    }
}

export default TimeLocation;