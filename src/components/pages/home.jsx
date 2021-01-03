import React, { Component } from 'react';
import Header from "../header/header.jsx";
import ContentHome from "../home/contentHome.jsx";
import Footer from "../footer/footer.jsx";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pageContainer">
                <Header/>
                <ContentHome/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;