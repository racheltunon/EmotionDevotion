const verses = [{
    mood: "happy",
    scripture: "I will give thanks to the LORD with all my heart; I will tell of all Your wonders",
    verse: "PSALMS 9:1-2",
    version: "NASB",
    comment: " "
},
{
    mood: "happy",
    scripture: "A joyful heart is good medicine, But a broken spirit dries up the bones",
    verse: "PROVERBS 17:22",
    version: "NIV",
    comment: " "
    
},
{
    mood: "stressed",
    scripture: "Peace I leave with you; My peace I give to you; not as the world gives do I give to you. Do not let your heart be troubled, nor let it be fearful",
    verse: "JOHN 14:27",
    version: "ESV",
    comment: "Praise God"
},
{
    mood: "stressed",
    scripture: "Let the peace of Christ rule in your hearts, to which indeed you were called in one body; and be thankful",
    verse: "COLOSSIANS 3:15",
    version: "NASB",
    comment: " "
},
{
    mood: "angry",
    scripture: "for the anger of man does not achieve the righteousness of God",
    verse: "JAMES 1:20",
    version: "NASB",
    comment: "thats good!"
},
{
    mood: "angry",
    scripture: "Do not be overcome by evil, but overcome evil with good",
    verse: "ROMANS 12:21",
    version: "NIV",
    comment: " "
},
{
    mood: "angry",
    scripture: "BE ANGRY, AND yet DO NOT SIN; do not let the sun go down on your anger",
    verse: "EPHESIANS 4:26",
    version: "ESV",
    comment: " "
},
{
    mood: "sad",
    scripture: "Have I not commanded you? Be strong and courageous! Do not tremble or be dismayed, for the LORD your God is with you wherever you go",
    verse: "JOSHUA 1:9",
    version: "NASB",
    comment: "wow"
},
{
    mood: "sad",
    scripture: "Blessed are the ones who mourn, for they shall be comforted",
    verse: "MATTHEW 5:4",
    version: "NASB",
    comment: " "
},
{
    mood: "stressed",
    scripture: "casting all your anxiety on Him, because He cares for you",
    verse: "1 PETER 5:7",
    version: "NIV",
    comment: "AMEN!"
},
{
    mood: "sad",
    scripture: "He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away",
    verse: "REVELATION 21:4",
    version: "NASB",
    comment: " "
},
{
    mood: "stressed",
    scripture: "Yet those who wait for the LORD will gain new strength; They will nount up with wings like eagles, They will run and not get tired, They will walk and not become weary",
    verse: "ISAIAH 40:31",
    version: "NIV",
    comment: " "
},
{
    mood: "happy",
    scripture: "I will give thanks to the LORD with all my heart; I will tell of all Your wonders.",
    verse: "PSALMS 9:1-2",
    version: "NASB",
    comment: " "
},
{
    mood: "angry",
    scripture: "Whether, then, you eat or drink or whatever you do, do all to the glory of God",
    verse: "1 CORINTHIANS 10:31",
    version: "NIV",
    comment: "yesssss"
},
{
    mood: "happy",
    scripture: "For you will go out with joy And be led forth with peace; The mountains and the hills will break forth into shouts of joy before you, And all the trees of the field will clap their hands",
    verse: "ISAIAH 55:12",
    version: "ESV",
    comment: " "
}]

const getVerses = (req, res) => {
    console.log(req.params.mood)
    const versesWeWant = []; 
    verses.forEach(verse => {
        if (verse.mood === req.params.mood) {versesWeWant.push(verse)} });
    console.log(versesWeWant)
    res.json(versesWeWant);
};

const deleteVerse = (req, res) => {
    const index = verses.findIndex(verse => verse.mood === req.params.mood);
    verses.splice(index, 1);
    res.json(verses);
};

const addVerse = (req, res) => {
    console.log(req.body)
    verses.push(req.body);
    res.json(verses);
};

module.exports = {
    getVerses,
    deleteVerse,
    addVerse
}