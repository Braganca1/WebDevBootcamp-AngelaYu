import path from "path"; //********************teste
import { dirname } from "path"; //********************teste
import { fileURLToPath } from "url"; //********************teste
const __dirname = dirname(fileURLToPath(import.meta.url)); //********************teste


import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server running on port "+port+".");
})

app.get("/", (req,res) => {
    res.send("Home Page");
})

app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "register.html")); //********************teste
})

app.get("/about", (req,res) => {
    res.send('<h1 style="color:blue">O cabeça de balão tem uma cabeça tão tão grande que é gigantesca</h1>');
})

app.get("/contact", (req,res) => {
    res.send('<h1 style="color:blue">Pra falar com ele só no fundo do mar</h1>');
})

app.post("/register", (req, res) => {
    //Do something with the data
    res.sendStatus(201);
    console.log("Data received");
  });
  