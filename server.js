const express = require ('express');
const app = express();
const data = require('./data-example.json');

// for testing API client => https://jsonplaceholder.typicode.com/users

app.use(express.json());

app.get("/clients", function(req, res) {
    res.json(data);
});
app.get("/clients/:id", function(req, res) {});
app.post("/clients", function(req, res) {});
app.put("/clients", function(req, res) {});
app.put("/clients:id", function(req, res) {});
app.delete("/clients", function(req, res) {});
app.delete("/clients:id", function(req, res) {});

app.listen(5000, function(){
    console.log("Server is running");
})