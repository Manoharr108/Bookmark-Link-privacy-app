require('dotenv').config()
const express = require('express');
const app = express();
const router = require("./routes/link-route")
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path")
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.urlencoded({extended:false}))

app.use('/',router)

app.get('/', (req, res) => {
    return res.redirect("/Linkprotector")
});
app.get('/Linkprotector', (req, res) => {
    res.sendFile(path.join(__dirname, './public/create.html'));
});

app.get('/Linkshortner', (req, res) => {
    res.sendFile(path.join(__dirname, './public/create2.html'));
});
app.get('/:id', (req, res) => {
    return res.sendFile(path.join(__dirname, './public/password.html'));   
});

mongoose.connect("mongodb+srv://manohar2004gr:5DFpcNwqPVvyLaww@testapi.unppitm.mongodb.net/?retryWrites=true&w=majority&appName=TestApi")
    .then(() => {
        console.log("Successfully connected to DB!");
        app.listen(3000, () => {
            console.log(`Server is listening on port 3000`);
        });
    })
    .catch((err) => {
        console.log("Database connection error: ", err.message);
    });
