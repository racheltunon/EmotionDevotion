import React, { Component } from 'react';
import './App.css';
import Moods from "./components/Header/Moods";
import About from "./components/Header/About";
import Boookmarks from "./components/Header/Bookmarks";
import logo from "./Untitled_Artwork 13.png";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home"
      
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(newView){
    this.setState({view: newView });
  }
updateView(){
  this.setState({view: []});
}
render() {
  console.log(this.state)
  return (
   <div>
     <header>
       <img  className="logo" src ={logo} alt= "MoodyBible Logo"/>
    
       <nav>
          <button target="_top"className={this.state.view === "home" ? "current" : ""} onClick={() => window.location.reload()} 
          
          alt="">Home</button>
          {/* ()=> this.setState({view: "home"}) */}
          
         <button className={this.state.view === "bookmarks" ? "current" : ""} onClick={()=> this.setState({view: "bookmarks"})}
          alt="">Bookmarks</button>
          
          <button className={this.state.view === "about" ? "current" : ""} onClick={()=> this.setState({view: "about"})}
           alt="">About Us</button>
       </nav>
    
     </header>
     {this.state.view === "home" ? (
       <Moods  />
      
     ) : (
       null
     )}
     {this.state.view === "about" ? (
       <About  />
     
     ) : (
       null
     )}
     {this.state.view === "bookmarks" ? (
       <Boookmarks  />
     
     ) : (
       null
     )}
   </div>
  )
}

}

export default App;
