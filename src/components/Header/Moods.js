import React, {Component} from "react";
import "../../App.css"
import Mood from "../Moods/Mood";
import Add from "../Moods/Add";

class Moods extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: "verses", 

           
        };
       
    }
   

  render(){
    console.log(this.state)
      return(
        <div className="landingPage">
          <Mood  />
          <img className={this.state.view === "formButton" ? "current" : ""}
            onClick={() => this.state} src="https://img.icons8.com/nolan/64/000000/plus.png" alt="form button"/>
          <Add />
          <div className="everythingElse">
            

          </div>

        </div>  


          
      )
  }
}   
export default Moods;                                                                                                                                                                                        