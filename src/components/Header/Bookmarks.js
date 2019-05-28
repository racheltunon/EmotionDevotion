import React, {Component} from "react";
import Footer from "../Footer";
import axios from "axios";
import like from "../Moods/icons8-love-64.png";
import bookmark from "../Moods/icons8-filled-bookmark-ribbon-32.png";




class Bookmarks extends Component {
    constructor(props){
        super(props);
        this.state = {
          bookmarked: []
        };
        // this.updateHome = this.updateHome.bind(this);
    }
  componentDidMount(){
      axios.get("/api/bookmarks").then( res => {
          this.setState({bookmarked: res.data}) 
        }) 
    } 
    
    
    
    render(){
        console.log(this.state.bookmarked);
        const yaaas = this.state.bookmarked.map((elements, id) => {
            return (
                <div className="page" key={id}>
        <div className="verses">
          <h2 className="scripture">{elements.scripture}</h2>
          <h3>{elements.verse}</h3>
          <h4>{elements.version}</h4>
            <section className="like">
            <h5>{elements.likes}</h5>
            <img className="likeButton" src={like} alt="" />
              <img className="bookmarkButton" src={bookmark}/>  
             
            </section>
              
            
        </div>


      </div>
                )
        })
        return(
            <div>
              <section>
              <h1 className="bookmarkPage">Bookmarks</h1>
              </section>
              {yaaas}
            <Footer />
          </div>
      )
  }
}   
export default Bookmarks;                                               