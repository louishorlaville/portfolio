import React, { Component } from 'react';

class TimeLocation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="timeContainer">
                <div className="timeClock">17:03:55</div>
                <div className="timeLocation">Montréal, Canada</div>
                <div className="timeLanguage"><span id="english">English</span>/ <span id="french">Français</span></div>
            </div>
            
         );
    }
}
 
export default TimeLocation;