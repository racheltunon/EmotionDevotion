//ADD A LIKE PROPERTY TO EACH VERSE
//WHEN THE LIKE BUTTON IS CLICKED MAKE A PUT REQUEST TO THE BACKEND
//FIND THE RIGHT VERSE, AND SEND BACK THE ARRAY
//UPDATE THE ARRAY IN STATE
let bookmarks = [];
const verses = [{
    mood: "happy",
    scripture: "I will give thanks to the LORD with all my heart; I will tell of all Your wonders",
    verse: "PSALMS 9:1-2",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "happy",
    scripture: "A joyful heart is good medicine, But a broken spirit dries up the bones",
    verse: "PROVERBS 17:22",
    version: "NIV",
    likes: 0,
    comment: []
    
},
{
    mood: "stressed",
    scripture: "Peace I leave with you; My peace I give to you; not as the world gives do I give to you. Do not let your heart be troubled, nor let it be fearful",
    verse: "JOHN 14:27",
    version: "ESV",
    likes: 0,
    comment: []
},
{
    mood: "stressed",
    scripture: "Let the peace of Christ rule in your hearts, to which indeed you were called in one body; and be thankful",
    verse: "COLOSSIANS 3:15",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "angry",
    scripture: "for the anger of man does not achieve the righteousness of God",
    verse: "JAMES 1:20",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "angry",
    scripture: "Do not be overcome by evil, but overcome evil with good",
    verse: "ROMANS 12:21",
    version: "NIV",
    likes: 0,
    comment: []
},
{
    mood: "angry",
    scripture: "BE ANGRY, AND yet DO NOT SIN; do not let the sun go down on your anger",
    verse: "EPHESIANS 4:26",
    version: "ESV",
    likes: 0,
    comment: []
},
{
    mood: "sad",
    scripture: "Have I not commanded you? Be strong and courageous! Do not tremble or be dismayed, for the LORD your God is with you wherever you go",
    verse: "JOSHUA 1:9",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "sad",
    scripture: "Blessed are the ones who mourn, for they shall be comforted",
    verse: "MATTHEW 5:4",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "stressed",
    scripture: "casting all your anxiety on Him, because He cares for you",
    verse: "1 PETER 5:7",
    version: "NIV",
    likes: 0,
    comment: []
},
{
    mood: "sad",
    scripture: "He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away",
    verse: "REVELATION 21:4",
    version: "NASB",
    likes: 0,
    comment: []
},
{
    mood: "stressed",
    scripture: "Yet those who wait for the LORD will gain new strength; They will nount up with wings like eagles, They will run and not get tired, They will walk and not become weary",
    verse: "ISAIAH 40:31",
    version: "NIV",
    likes: 0,
    comment: []
},
{
    mood: "angry",
    scripture: "Whether, then, you eat or drink or whatever you do, do all to the glory of God",
    verse: "1 CORINTHIANS 10:31",
    version: "NIV",
    likes: 0,
    comment: []
},
{
    mood: "happy",
    scripture: "For you will go out with joy And be led forth with peace; The mountains and the hills will break forth into shouts of joy before you, And all the trees of the field will clap their hands",
    verse: "ISAIAH 55:12",
    version: "ESV",
    likes: 0,
    comment: []
}]

const getVerses = (req, res) => {
   
    const versesWeWant = []; 
    verses.forEach(verse => {
        if (verse.mood === req.params.mood) {versesWeWant.push(verse)} });
   
    res.json(versesWeWant);
};

const deleteVerse = (req, res) => {
    
    console.log("Yo! this is working, sickkk")
    const index = verses.findIndex(verse => verse.verse === req.params.verse);
    verses.splice(index, 1);
    let newVerses = verses.filter((verse) => {
        if (verse.mood === req.params.mood) {return true} else {return false}

    })


    res.json(newVerses);
};

const addVerse = (req, res) => {
    console.log(req.body)
    verses.push(req.body);
    let newVerses = verses.filter((verse) => {
        if (verse.mood === req.body.mood) {return true} else {return false}

    })


    res.json(newVerses);
};

const likeVerse = (req, res) => {
   console.log("hola pedro")
   const index = verses.findIndex(verse => verse.verse === req.params.verse);
   verses[index].likes ++;
   const versesWeWant = []; 
    verses.forEach(verse => {
        if (verse.mood === req.params.mood) {versesWeWant.push(verse)} });
   
    res.json(versesWeWant);
   
    }
const postBookmark = (req, res) => {
    console.log("tell em!")
    const index = verses.findIndex(verse => verse.verse === req.params.verse);
    bookmarks.push(verses[index]);
    console.log(bookmarks)
}
const getVerse = (req, res) => {
    console.log("ive got a small but and im confident")
    res.json(bookmarks)
}


module.exports = {
    getVerses,
    deleteVerse,
    addVerse,
    likeVerse,
    postBookmark,
    getVerse
}