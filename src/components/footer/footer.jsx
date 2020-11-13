import React, { Component } from 'react';
import Ball from '../../svg/ball.svg';
import Logo from '../header/logo';


class Footer extends Component {
    state = { 
        windowWidth:window.innerWidth,
        balls:[]
     };

    handleResize = (e) => {
        

        this.setState({ windowWidth: window.innerWidth });
        console.log(this.state.windowWidth/32)
        for(let i=0;(this.state.windowWidth/32)>i;i++){
            console.log("JE PASSE ICI");
            let ballsArray=this.state.balls.slice();
            ballsArray[i]=i+1;
            this.setState({balls:ballsArray});
        }


        
    };


    render() { 
        const { windowWidth } = this.state;
        const { balls } = this.state;
        
        return ( 
            <div className="footerContainer">
                {this.state.balls[this.state.balls.length-1]}
                <div className="pacmanContainer">
                    <img src="../svg/pacman.svg" alt="pacman" id="pacman"/>
                </div>
                <div className="pacmanBallsContainer">
                    {balls.map(id=> (
                        <img id={id} key={id} src={Ball} alt="PacmanBall"/>
                    ))}
                </div>
            </div>
        );
    };

    componentDidMount() {
        window.addEventListener("load", this.handleResize);
        window.addEventListener("resize", this.handleResize);
        //window.addEventListener("resize", this.fillBalls);
        
    };

    

    
}
 
export default Footer;