import React from "react";
import axios from "axios";
import Mood from "./Mood";

function Verse(props) {
    const moods = props.moods;
    const verses = moods.map((mood) => 
    <Mood key={mood.id}
        value={mood}/>
    )
  
    // if (mood === "happy") {
    //     return (
    //         mood ? "happy" : props.verse.happy

    //     )
    

    // }
//   return (
//     <article className="verse">
      

    
//       <section>
//         <h3>{props.verse.mood}</h3>
//         <button
//           onClick={() => {
//             axios.delete("/api/verses/:mood" + props.verse).then(response => {
//               props.updateVerses(response.data);
//             });
//           }}
//         >
//           Delete
//         </button>
//       </section>
//     </article>
//   );
}
const verse = 
<Mood 
id=""/>

export default Verse;
