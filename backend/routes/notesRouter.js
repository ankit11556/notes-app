const express = require('express');
const notesRouter = express.Router();
const notesController = require('../controller/notesController')

//create
notesRouter.post("/notes",notesController.createNotes)

//get all notes
notesRouter.get("/notes",notesController.getAllNotes)

//get single note
notesRouter.get("/notes/:id",notesController.getNote)

//update
notesRouter.put("/notes/:id",notesController.noteUpdate)

//delete
notesRouter.delete("/notes/:id",notesController.noteDelete)

module.exports = notesRouter