const express = require("express");
const app = express();

const port = 4000
app.get("/",(req,res) => {
    return res.send("You are visiting home route");
});

const port = 4001
app.get("/SignUp",(req,res) => {
    return res.send("You are visiting signup");
});

const port = 4002
app.get("/SignIn",(req,res) => {
    return res.send("You are visiting signin route");
});

const port = 4003
app.get("/Sign Out",(req,res) => {
    return res.send("You are visiting signout route");
});

const port = 4004
app.get("/Hitesh",(req,res) => {
    return res.send("You are visiting hitesh route");
});

app.listen(port, () => {
    console.log("Server is up and running...");
});

