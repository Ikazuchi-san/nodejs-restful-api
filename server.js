const express = require ('express');
const res = require('express/lib/response');
const app = express();
const data = require('./data/data-example.json');

// for testing API client => https://jsonplaceholder.typicode.com/users

app.use(express.json());

app.get("/clients", function(req, res) {
    res.json(data);

});
app.get("/clients/:id", function(req, res) {
    const { id }  = req.params;
    const client = data.find(cli => cli.id == id);

    return (!client) ? res.status(204).json(): res.json(client);    

});
app.post("/clients", function(req, res) {
    const {name,email} = req.body;

    // Save

    res.json({name, email});

});
app.put("/clients/:id", function(req, res) {
    const { id }  = req.params;
    const client = data.find(cli => cli.id == id);

    const {name} = req.body;
    client.name = name;
    return (!client) ? res.status(204).json(): res.json(client);

});
app.delete("/clients/:id", function(req, res) {
    const { id } = req.params;
    const clientsfiltered = data.filter(cli => cli.id != id);

    res.json(clientsfiltered);
    
});

app.listen(80, function(){
    console.log("Server is running");
})