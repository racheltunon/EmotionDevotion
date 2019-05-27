import React, {Component} from "react";




class Bookmarks extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true, 
            error: ""
        };
        // this.updateHome = this.updateHome.bind(this);
    }
  
    
  render(){
      return(
          <div>
              <h1>Bookmarks</h1>
          </div>
      )
  }
}   
export default Bookmarks;                                               