const express = require("express");
const app = express()
const {getVerses, deleteVerse, addVerse} = require("./controllers/verseController");

app.use(express.json());
app.get("/api/verses/:mood", getVerses);
app.delete("api/verses/:mood", deleteVerse);
app.post("/api/verses", addVerse);


const SERVER_PORT = 5050;
app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on ${SERVER_PORT}`);
});