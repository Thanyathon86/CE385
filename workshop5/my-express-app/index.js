const express = require('express');
const app = express();

app.use(express.json()); 


let students = [
    { id: 1, name: "Thanyathon", age: 21 },
    { id: 2, name: "kitsanapong", age: 22 },
    { id: 3, name: "Thaddao", age: 99 }
];


app.get('/api/students', (req, res) => {
    res.send(students);
});


app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.send(student);
    } else {
        res.status(404).send("Error 404: Student Not Found!");
    }
});


app.post('/api/students', (req, res) => {
    const newStudent = {
        id: req.body.id || students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).send(newStudent);
});


app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        student.name = req.body.name || student.name;
        student.age = req.body.age || student.age;
        res.send(student);
    } else {
        res.status(404).send("Error 404: Student Not Found for update!");
    }
});


app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        res.send(deletedStudent[0]);
    } else {
        res.status(404).send("Error 404: Student Not Found for delete!");
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});