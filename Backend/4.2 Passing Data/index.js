import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    h1: "<h1>Enter your name</h1>"
});
});

app.post("/submit", (req, res) => {
    let numberfname = req.body.fName.length;
    let numberlname =req.body.lName.length;
    let number = numberfname + numberlname;
    res.render("index.ejs", {
       h1: "<h1>Your name have " + number+ " letters</h1>"
    })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
