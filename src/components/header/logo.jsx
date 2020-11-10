import React, { Component } from 'react';
import logo from '../../svg/logo.svg';


class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="containerLogoHeader">
                <img src={logo} className="logo" alt="logo" />
            </div>
        );
    }
}
 
export default Logo;