import pg from "pg";

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database: "world",
    password: "123456789",
    port: 5432
});

let quiz;

db.connect();

db.query("SELECT * FROM world where id < 11", (err, res) => {
    if (err) {
        console.error("Error executing the query" ,err.stack);
    } else {
        quiz = res.rows;
    }
    console.log(quiz[2].name);
    db.end();   
});