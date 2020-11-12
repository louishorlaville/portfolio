import React, { Component } from 'react';
import logo from '../../svg/logo.svg';
import '../../css/style.css';



class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="logoContainer headerItems">
                <img src={logo} className="logo" alt="logo" />
            </div>
        );
    }
}
 
export default Logo;