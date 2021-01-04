import React from "react";
import {Route} from "react-router-dom"
import Home from "./components/pages/home.jsx";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ContentHome from "./components/home/contentHome.jsx";
import ContentProjectList from "./components/projectList/contentProjectList.jsx"

function App() {
  return (
    <div className="pageContainer">
      <Header/>
      <Route exact path="/" component={ContentHome}/>
      <Route path="/projects" component={ContentProjectList}/>
      <Footer/>
    </div>
  );
}

export default App;
