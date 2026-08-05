const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// storage
let notes = [];
let nextId = 1;

// fetch all notes
app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// new note
app.post("/api/notes", (req, res) => {
    const { title, content } = req.body;

    const newNote = {
        id: nextId++,
        title,
        content,
        createdAt: new Date()
    };

    notes.push(newNote);

    res.status(201).json(newNote);
});

// server port
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});