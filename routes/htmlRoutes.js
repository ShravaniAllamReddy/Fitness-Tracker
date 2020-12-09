const router = require("express").Router();
//path package is included to get the correct file path for our html
const path = require("path");


//Html routes

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


router.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router;

