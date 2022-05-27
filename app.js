const express = require("express");
const app = express();
const path = require("path");


app.get('/', (req,res) => {
    res.send("Hola mundo")
})

/*app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, poner rutaaaaaa ))
})*/

app.listen((3000), () => {
    console.log("servidor corriendo en localhost:3000")
});