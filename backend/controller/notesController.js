const Note = require("../models/modelNote");

exports.createNotes = async(req,res) =>{
try {
  const {title,content} = req.body;
  const newNote = new Note({title,content});

  await newNote.save();
  res.status(201).json({message: "Add note successfully",newNote})
} catch (error) {
  res.status(500).json({message: "note add failed",error: error.message})
}
};

exports.getAllNotes = async (req,res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

exports.getNote = async (req,res) => {
  try {
    const {id} = req.params;
    const note = await Note.findById(id);

    if(!note){
      return res.status(404).json({message: "Note not found"});
    }

    res.status(200).json({message: "Note found",note})
  } catch (error) {
    res.status(500).json({message:"something went error",error: error.message})
  }
};

exports.noteUpdate = async (req,res) => {
  try {
    const {id} = req.params;
    const {title,content} = req.body;

    const update = await Note.findByIdAndUpdate(
      id,
      {title,content},
      {new: true, runValidators: true}
    );

    if (!update) {
     return res.status(404).json({message: "Note not found"}); 
    }

    res.status(200).json({message: "Note found successfully",update})
  } catch (error) {
    res.status(500).json({message: "Something went wrong",error: error.message})
  }
};

exports.noteDelete = async (req,res) => {
  try {
    const {id} = req.params;

    const deleteNote = await Note.findByIdAndDelete(id);

    if (!deleteNote) {
      return res.status(404).json({message: "Note not found"});
    }

    res.status(200).json({message: "Note delete successfully",deleteNote})
  } catch (error) {
    res.status(500).json({message: "something went wrong",error: error.message})
  }
}
