const express = require("express");
const app = express()
const {getVerses, deleteVerse, addVerse, likeVerse, getVerse, postBookmark} = require("./controllers/verseController");

app.use(express.json());
//Endpoints//
app.get("/api/verses/:mood", getVerses);
app.delete("/api/verses/:verse/:mood", deleteVerse);
app.post("/api/verses", addVerse);
app.put("/api/verses/:verse/:mood", likeVerse);
app.post("/api/bookmarks/:verse", postBookmark)
app.get("/api/bookmarks", getVerse);
// app.put("/api/verses/:verse",updateVerse);
// app.get("/api/verses/:bookmark", getBookmark);


const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on ${SERVER_PORT}`);
});