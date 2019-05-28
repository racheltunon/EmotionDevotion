import React, {Component} from "react";
import "../../App.css"
import Mood from "../Moods/Mood";
import Add from "../Moods/Add";
import Footer from "../Footer";
import formButton from "./icons8-add-50.png";

class Moods extends Component {
    constructor(props){
        super(props);
        this.state = {
          verses: [],
           show: false
        };
       this.setVerses = this.setVerses.bind(this)
    }
   
handleClick = () => {
  this.setState({show: !this.state.show})
}
setVerses(verses) {
  this.setState({verses: verses})
}

  render(){
    console.log(this.state.page)
      return(
        <div className="landingPage">
          <Mood 
          verses = {this.state.verses} />
          {this.state.show === true ? (
           <section>
             <img className="cancelButton" src="https://img.icons8.com/ios/24/000000/cancel.png" onClick={this.handleClick}/>
            
           <Add 
           setVerses = {this.setVerses}/>
            
            </section>
          ):(
          <img className='formButton'
            onClick={this.handleClick} src={formButton} alt="form button"/>
            )}

            <Footer />

        </div>  


          
      )
  }
}   
export default Moods;                                                                                                                                                                                        