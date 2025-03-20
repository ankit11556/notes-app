import { useEffect, useState } from "react"
import { deleteNote, getNotes, updateNote } from "../api/api";
import NoteCard from "../components/NoteCard";

//Get
const HomePage = () =>{
  const [notes,setNotes] = useState([]);
  const[currentNote,setCurreNote] = useState(null)
  
 const fetchNotes = async () => { 
 try {
  const get = await getNotes();
  setNotes(get.data);
 } catch (error) {
  console.log("error fatching data",error);
 }
 }
 

 //Delete
 const handleDelete = async (id) =>{
  try {
    const response = await deleteNote(id);
    alert(response.data.message);
    const delete_Note = notes.filter((note)=> note._id !== id);
  setNotes(delete_Note)
  } catch (error) {
    alert(response.date.error.message)
  }
 }

 const handleEdit = (note) =>{
  setCurreNote(note)
 }

 //note update
 const handleUpdate = async (e) => {
  e.preventDefault()

  try {
    const {_id,title,content} = currentNote;
    const response = await updateNote(_id,{title,content});
    alert(response.data.message) 
    setCurreNote(null);
    fetchNotes();
  } catch (error) {
    alert(response.data.message)
  }
 }

 useEffect(()=>{
  fetchNotes()
 },[]);
 
  return(
    <div className="flex flex-wrap gap-4 justify-center mt-6" >

      {currentNote?(
    <form onSubmit={handleUpdate} className="flex flex-col p-4 w-full max-w-md gap-3">
    <input type="text" 
    placeholder="Title"
    value={currentNote?.title || ""}
    onChange={(e)=>
      setCurreNote({...currentNote,title: e.target.value})
    }
    className="border p-2"
    />
    <textarea 
    placeholder="Content"
    value={currentNote?.content || ""}
    onChange={(e)=>
      setCurreNote({...currentNote, content: e.target.value})
    }
     className="border p-2 mt-2"
    />
  <button type="submit" 
  className="bg-blue-500 text-white p-2 mt-2 rounded-md hover:cursor-pointer hover:text-amber-100">
    Add Note
  </button>
  
    </form>
      ):(<div className="flex gap-4">
      {notes.map((note)=>{
        return <div key={note._id}>
          <NoteCard note={note} onDelete={handleDelete} onEdit={handleEdit}></NoteCard>
        </div>
    })}
    </div>
)}
    </div>
  )
}

export default HomePage