import React, { Component } from "react";
import "../../App.css"
import happy from "./Untitled_Artwork 9.png";
import sad from "./Untitled_Artwork 10.png";
import stressed from "./Untitled_Artwork 11.png"
import angry from "./Untitled_Artwork 12.png"
import axios from "axios";
import like from "./icons8-love-64.png";
import bookmark from "./icons8-filled-bookmark-ribbon-32.png"




class Mood extends Component {
    constructor(props) {
      super(props);
      this.state = {
        versesWeWant: []
        
       

      };
 
    }
  componentDidUpdate(prevProps) {
    if (this.props.verses !== prevProps.verses) {
      this.setState({versesWeWant: this.props.verses})
    }
  }
verses(mood){
  console.log("this function got clicked")
  axios.get(`/api/verses/${mood}`).then(res => {
 this.setState({versesWeWant: res.data })
  }).catch(error => {console.log(error)});
}
like(element){
  console.log("sjdfkhs")
  axios.put(`/api/verses/${element.verse}/${element.mood}`).then(res => {
    console.log(res.data)
    this.setState({versesWeWant: res.data})
  }).catch(error => {console.log(error)});

}
delete(element){
  // console.log(verse)
  axios.delete(`/api/verses/${element.verse}/${element.mood}`).then(res => {
    console.log(res.data)
    this.setState({versesWeWant: res.data})
  }).catch(error => {console.log(error)});
}
bookmark(element){
  axios.post(`/api/bookmarks/${element.verse}`).then(res => {
    console.log("hello, this is how we do it up yo!")
    
    
  })
}

  render() {
    const { likes } = this.state;
    console.log(this.state.versesWeWant)
  const verses = this.state.versesWeWant.map((elements,id) => {
    console.log(elements.verse);
    return (
      <div className="page" key={id}>
        <div className="verses">
          <h2 className="scripture">{elements.scripture}</h2>
          <h3>{elements.verse}</h3>
          <h4>{elements.version}</h4>
            <section className="like">
              <h5>{elements.likes}</h5>
              <img className="likeButton" src={like} alt="" onClick={() => this.like(elements)}/>
              <img className="bookmarkButton" src={bookmark} onClick={() => this.bookmark(elements)}/>
            </section>
              <button className="deleteButton" onClick={() => this.delete(elements)}>x</button>
            
        </div>


      </div>
    )
  } )
  const {view} = this.state;
 
    return (
    <div>
       <div className="moods">
         <img className={view === "happyMood" ? "current" : ""} onClick={()=> this.verses("happy")} 
        src= {happy} alt=""/>

        <img className={view === "sadMood" ? "current" : ""} onClick={()=> this.verses("sad")}
        src= {sad} alt=""/>
        
        <img className={view === "stressedMood" ? "current" : ""} onClick={()=> this.verses("stressed")}
        src= {stressed} alt=""/>

        <img className={view === "angryMood" ? "current" : ""} onClick={()=> this.verses("angry")}
        src={angry} alt=""/>
    </div>

{verses}

    </div>
      
    
    )
  }
  
}


export default Mood;






