import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Cookies from 'universal-cookie';

class TimeLocation extends Component {

    languageSwitchHandler=()=>{
        console.log(this);
    }

    render() { 
        return ( 
            <div className="timeContainer headerItems">
                <div className="timeItem" id="timeClock"><Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Montreal'} /></div>
                <div className="timeItem highlightYellow" id="timeLocation">Montréal, Canada</div>
                <div className="timeItem" id="timeLanguage"><span className ="highlightPink" id="english" onClick={this.languageSwitchHandler}>English</span> // <span id="french" onClick={this.languageSwitchHandler}>Français</span></div>
            </div>
            
         );
    }
}
 
export default TimeLocation;