const express = require('express')

const app = express()

app.get('/customers', (req, res) => {
    const cutomers = [
        {id:1,fname:"kiran",lname:"Acharya"},
        {id:2,fname:"Naruto",lname:"Uzumaki"},
        {id:3,fname:"Eren",lname:"Yeager"},

    ]
    res.json(cutomers)
});

const PORT = 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});