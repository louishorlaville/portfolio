import React, { Component } from 'react';

class TimeLocation extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="timeContainer headerItems">
                <div className="timeItem" id="timeClock">17:03:55</div>
                <div className="timeItem" id="timeLocation">Montréal, Canada</div>
                <div className="timeItem" id="timeLanguage"><span id="english">English</span> // <span id="french">Français</span></div>
            </div>
            
         );
    }
}
 
export default TimeLocation;