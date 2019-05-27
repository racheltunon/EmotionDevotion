import React, { Component } from "react";
import "../../App.css"
import happy from "./happyMood.png";
import sad from "./sadMood.png";
import stressed from "./stressedMood.png"
import angry from "./angryMood.png"
import axios from "axios";
import like from "./icons8-love-64.png";



class Mood extends Component {
    constructor(props) {
      super(props);
      this.state = {
        versesWeWant: [],
        likes: 0,
       

      };
 
    }
verses(mood){
  console.log("this function got clicked")
  axios.get(`/api/verses/${mood}`).then(res => {
 this.setState({versesWeWant: res.data })
  })
}
like(){
  this.setState({likes: this.state.likes + 1})
}

  render() {
  const verses = this.state.versesWeWant.map(elements => {
    return (
      <div className="page">
        <div className="verses">
          <h2 clssName="scripture">{elements.scripture}</h2>
          <h3>{elements.verse}</h3>
          <h4>{elements.version}</h4>
            <section className="like">
              <h5>{this.state.likes}</h5>
              <img className="likeButton" src={like} alt="" onClick={() => this.like()}/>
            </section>
            
        </div>
      </div>
    )
  } )
  
 
    return (
    <div>
       <div className="moods">
         <img className={this.state.view === "happyMood" ? "current" : ""} onClick={()=> this.verses("happy")} 
        src= {happy} alt=""/>

        <img className={this.state.view === "sadMood" ? "current" : ""} onClick={()=> this.verses("sad")}
        src= {sad} alt=""/>
        
        <img className={this.state.view === "stressedMood" ? "current" : ""} onClick={()=> this.verses("stressed")}
        src= {stressed} alt=""/>

        <img className={this.state.view === "angryMood" ? "current" : ""} onClick={()=> this.verses("angry")}
        src={angry} alt=""/>
    </div>

{verses}
    </div>
      
    
    )
  }
  
}


export default Mood;






