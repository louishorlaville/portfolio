import React, { Component } from 'react';
import Ball from '../../svg/ball.svg';
import Pacman from '../../svg/pacmanFull.svg';
import Logo from '../header/logo';


class Footer extends Component {
    state = { 
        windowWidth:window.innerWidth,
        balls:[]
     };

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };


    render() { 
        const { windowWidth } = this.state;
        const { balls } = this.state;
        
        // this.updateBallArray(windowWidth);

        return ( 
            <div className="footerContainer">
                <div className="pacmanContainer">
                    <img src={Pacman} alt="pacman" id="pacmanFooter"/>
                </div>
                <div className="pacmanBallsContainer">
                    {this.state.balls.map(id=> (
                        <img id={id} key={id} src={Ball} alt="PacmanBall"/>
                    ))}
                </div>
            </div>
        );
    };

    updateBallArray=()=>{
        let ballsRendered = this.state.windowWidth/29; 
        for(let i=0;ballsRendered>i;i++){
            let ballsArray=this.state.balls.slice(0,Math.floor(ballsRendered)-1);
            ballsArray[i]=i+1;
            this.setState({balls:ballsArray});
        }
    }

    componentDidMount() {
        window.addEventListener("load", this.handleResize);
        window.addEventListener("load", this.updateBallArray);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("resize", this.updateBallArray);
        //window.addEventListener("resize", this.fillBalls);
        
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('resize', this.updateBallArray);
      }

    

    
}
 
export default Footer;