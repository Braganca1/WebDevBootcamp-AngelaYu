import express from "express";

const app = express();
const port = 3000;

var day = new Date("January 27, 2025");
var aviso ="";

app.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`);
}) 

if (day.getDay() === 0 || day.getDay() ===6){
     day = "it's a weekend!";
     aviso = "Enjoy your day";
}
else{
     day = "it's a weekday!";
     aviso = "Go to work";
}

app.get("/", (req,res) => {
    res.render("index.ejs", 
        {date: day,
        advice: aviso
    });
})