import React, { Component } from 'react';
import { Dimensions } from 'react-native';


class Footer extends Component {
    state = { 
        // width: Dimensions.get('window').width
     }
    render() { 
        return ( 
            <div className="footerContainer">
                <div className="pacmanContainer">
                    <img src="./svg/pacman.svg" alt="pacman" id="pacman"/>
                </div>
                <div className="pacmanBalls">
                    {console.log(this.width)}
                </div>
            </div>
         );
    }
}
 
export default Footer;