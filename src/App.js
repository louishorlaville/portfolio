import React, { Component } from "react";
import {Route} from "react-router-dom"

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ContentHome from "./components/pages/contentHome.jsx";
import ContentProjectList from "./components/pages/contentProjectList.jsx"
import ContentProjectProfile from "./components/pages/contentProjectProfile.jsx"
import ContentMyWork from "./components/pages/contentMyWork.jsx"
import ContentContact from "./components/pages/contentContact.jsx"
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class App extends Component{
  state={
    langData:"",
    scroll:true
  }

  callBackFunctionLang =(childData)=>{
    this.setState({langData:childData});
    console.log(this.state.langData);
  }


  render(){
    {console.log()}
    return (
      <div className="pageContainer">
        <Header parentCallback={this.callBackFunctionLang} />
        <Route exact path="/" component={ContentHome} />
        <Route path="/portfolio/projects" component={ContentProjectList}/>
        <Route path="/portfolio/projectProfile" component={ContentProjectProfile} />
        <Route path="/portfolio/contact" component={ContentContact} />
        <Route path="/portfolio/myWork"  component={ContentMyWork}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
