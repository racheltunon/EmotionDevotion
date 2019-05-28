import React, { Component } from "react";
import axios from "axios";
import "./form.css";
import App from "../../App";
import Mood from "./Mood";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null,
      mood: "",
      scripture: "",
      verse: "",
      version: "",
      
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  

  render() {
  
    return (
      <div>
      <form className="form1"
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("/api/verses/", {
              mood: this.state.mood,
              scripture: this.state.scripture,
              verse: this.state.verse,
              version: this.state.version,
              
            
            })
            .then(response => {
              console.log(response.data);
              this.props.setVerses(response.data);
              // this.props.updateView("verses");
            })
            .catch(error => {
              console.log(error);
        
            });
        }}
      > 
      
        <input className="moodInput" name="mood" onChange={this.handleChange} placeholder="Ex. happy" />
        <input className="scriptureInput" name="scripture" onChange={this.handleChange} placeholder="Ex. for God so loved the world.." />
        <input name="verse" onChange={this.handleChange} placeholder="Ex. John 3:16.." />
        <input name="version" onChange={this.handleChange} placeholder="Ex. ESV.." />
        <button className="submitButton" onClick={() => this.state.view=== "submit" ? "current" : ""}type="submit">SUBMIT</button>
      </form>
      
      {this.state.view === "submit" ? (
       <Mood   />
      
     ) : (
       null
     )}
     {this.state.view === "cancel" ? (
       <App />
     
     ) : (
       null
     )}
      </div>


    );
  }
}

export default Add;
