import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class TimeLocation extends Component {

    languageSwitchHandler=(e)=>{
        if(e.target.id==="french"){
            cookies.set("lang","fr");
        }
        else{
            cookies.set("lang","en")
        }
        this.sendData();
    }

    sendData = () =>{
        this.props.parentCallback(cookies.get("lang"));
    }

    render() { 
        return ( 
            <div className="timeContainer headerItems">
                <div className="timeItem" id="timeClock"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Montreal'} /></div>
                <div className="timeItem highlightYellow" id="timeLocation">Montréal, Canada</div>
                <div className="timeItem" id="timeLanguage"><span className ="highlightPink" id="english" onClick={((e)=>this.languageSwitchHandler(e))}>English</span> // <span id="french" onClick={((e)=>this.languageSwitchHandler(e))}>Français</span></div>
            </div>
            
         );
    }
}

export default TimeLocation;