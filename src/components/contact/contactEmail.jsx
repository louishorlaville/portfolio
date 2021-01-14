import React, { Component } from 'react';
import Pacman from '../../svg/pacmanFull.svg';
import contactData from "../../data/contact.json"
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const ContactEmail = () => {
    return ( 
        <div className="contactEmailContainer">
            <div className="contactEmailContent">
                <div className="contactEmail"><a href="mailto:louis.horlaville@gmail.com">{contactData[cookies.get("lang")].email.toUpperCase()}</a></div>
                <div className="contactEmailSide">
                    <div className="contactEmailSideBalls">
                        <div className="contactEmailBall">&#10240;</div>
                        <div className="contactEmailBall">&#10240;</div>
                        <div className="contactEmailBall">&#10240;</div>
                        <div className="contactEmailBall">&#10240;</div>
                        <div className="contactEmailBall">&#10240;</div>
                        <div className="contactEmailBall">&#10240;</div>
                    </div>
                    <div className="contactEmailSideText">{contactData[cookies.get("lang")].message}</div>
                </div>
            </div>
            <div className="contactEmailPacman">&#10240;</div>
        </div>
    );
}
 
export default ContactEmail;