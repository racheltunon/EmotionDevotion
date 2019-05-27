import React, { Component } from "react";
import axios from "axios";
import Verse from "./Verse";
import Mood from "./Mood";

class Verses extends Component {
    constructor(props) {
        super(props);
        this.state= {
           verses: [],
           mood: ["happy","sad","stressed","angry"],
           error: "" 
        }
        this.updateVerses = this.updateVerses.bind(this);
    }
  
    render() {
      const { verses } = this.state;
      return (
        <section>
          {this.state.loading ? <p>Loading...</p> : null}
          {this.state.error}
          {verses.map((verse, index) => (
            <Verse  key={index} verse={verse} updateVerses={this.updateVerses} />
          ))}
        </section>
      );
    }
    
}





// class Verses extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       verses: [],
//       loading: true,
//       error: ""
//     };
//     this.updateVerses = this.updateVerses.bind(this);
//   }
//   componentDidMount() {
//     axios
//       .get("/api/verses")
//       .then(response => {
//         this.setState({ verses: response.data, loading: false });
//       })
//       .catch(error => {
//         console.log(error);
//         this.setState({ loading: false, error: "An error occurred" });
//       });
//   }

//   updateVerses(newVerses) {
//     this.setState({ verses: newVerses });
   
//   }



export default Verses;
