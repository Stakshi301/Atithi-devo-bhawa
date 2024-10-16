const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));



app.listen(3000, () => {
    console.log("Server is starting......");
});

app.get("/", (req, res) => {
    res.render("layout/boilerplate.ejs");
});
