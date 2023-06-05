// route assignment / port assignment 

const express = require('express');
const path = require('path');
const PORT = 4444;
const fs = require('fs');

const uniqid = require('uniqid');

const app = express();

app.use(express.static('public'));
app.use(express.json());

// path / route to notes.html

app.get('/notes', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/public/notes.html'));
}); 

// GET API/Notes route. Requirement for assignment 
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '/db/db.json'), 'utf-8', (error,notes) =>{
        
        if (error) {
            res.json(error);
        } else {
            res.json(JSON.parse(notes));
        }
    } );

});

// POST Portion for route path given

app.post('/api/notes', (req, res) => {
    console.log(req.body);
    fs.readFile(path.join(__dirname,'/db/db.json'), 'utf-8', (error, notes) => {

        if (error) {
            res.json(error);
        } else {
            notes = JSON.parse(notes);

            // creates, return unique ID
            req.body.id = uniqid();

            notes.push(req.body);
            fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(notes), () => {
                res.send('Neato');
            } )
        }
    } )
});


app.delete('/api/notes/:uniqid' , (req, res) => {
    console.log(req.params.uniqid);





});

// returning unique ID 
console.log(uniqid());



// Default to homepage.  

app.get('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); 


// Added this message to confirm application is running properly when running node server.js

app.listen(PORT, () => {
    console.log('It works!')}
    );