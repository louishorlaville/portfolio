import React, { Component } from 'react';
import logo from '../../svg/logo.svg';
import {Link} from "react-router-dom";




class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="logoContainer headerItems">
                <Link id="homeLogo" to="/"><img src={logo} className="logo" alt="logo" /><div className="logoPacman">&#10240;</div></Link>
            </div>
        );
    }
}
 
export default Logo;