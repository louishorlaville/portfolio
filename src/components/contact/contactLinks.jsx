import React, { Component } from 'react';

const ContactLinks = () => {
    return ( 
        <div className="contactLinksContainer">
            <div className="contactLinkItemBox">
                <div className="contactLinkItem">
                    <a href="https://www.linkedin.com/in/louis-horlaville/" target="_blank">linkedIn</a>
                    <div className="boxHoverBehind">&#10240;</div>
                </div>
                <div className="contactLinkItemBall">&#10240;</div>
            </div>
            <div className="contactLinkItemBox">
                <div className="contactLinkItem">
                    <a href="https://github.com/louishorlaville" target="_blank">gitHub</a>
                    <div className="boxHoverBehind">&#10240;</div>
                </div>
                <div className="contactLinkItemBall">&#10240;</div>
            </div>
            <div className="contactLinkItemBox">
                <div className="contactLinkItem">
                    <a href="https://louishorlaville.artstation.com/" target="_blank">artstation</a>
                    <div className="boxHoverBehind">&#10240;</div>
                </div>
                <div className="contactLinkItemBall">&#10240;</div>
            </div>
        </div>
    );
}
 
export default ContactLinks;