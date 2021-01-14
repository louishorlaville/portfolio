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

  callBackFunctionScroll =(childData)=>{
    this.setState({scroll:childData});
    console.log(this.state.scroll);
  }

  onRouteChanged() {
    // if(this.setState.scroll!==cookies.get("scroll")){
    //   this.setState({scroll:cookies.get("scroll")});
    // }
    console.log("ehehehieiehieh");
  }

  render(){
    return (
      <div className="pageContainer">
        <Header parentCallback={this.callBackFunctionLang} />
        <Route exact path="/" render={(props)=>(<ContentHome {...props} langData={this.state.langData}/>)} />
        <Route path="/projects" render={(props)=>(<ContentProjectList {...props} langData={this.state.langData}/>)} />
        <Route path="/projectProfile" component={ContentProjectProfile} />
        <Route path="/contact" onEnter={this.onRouteChanged} component={ContentContact} />
        <Route path="/myWork" component={ContentMyWork}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
