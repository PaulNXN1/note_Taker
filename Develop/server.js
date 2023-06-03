// route assignment / port assignment 

const express = require('express');
const path = require('path');
const PORT = 4444;
const fs = require('fs');

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
            req.body.id = uuid(),
            notes.push(req.body);
            fs.writeFile(path.join(__dirname, '/db/db.json'), JSON.stringify(notes), () => {
                res.send('Neato');
            } )
        }
    } )
})



// Default to homepage.  

app.get('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); 


// Added this message to confirm application is running properly 

app.listen(PORT, () => {
    console.log('It works!')}
    );