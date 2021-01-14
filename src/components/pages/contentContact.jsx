import React, { Component } from 'react';
import homeData from "../../data/home.json"
import ContactEmail from "../contact/contactEmail.jsx";
import ContactLinks from "../contact/contactLinks.jsx";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class ContentContact extends Component {
    state = {  }
    render() { 
        return (
            <div className="contentContainer">
                <div className="contactContainer">
                    <div className="contactTitleContainer">
                        <div className="contactTitle">//{homeData[cookies.get("lang")].nav[1].toUpperCase()}</div>
                    </div>
                    <ContactEmail/>
                    <ContactLinks/>
                </div>
            </div>
        );
    }
}
 
export default ContentContact;