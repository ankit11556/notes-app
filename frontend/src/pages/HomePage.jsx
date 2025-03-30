import { useEffect, useState } from "react"
import { deleteNote, getNotes } from "../api/api";
import NoteCard from "../components/NoteCard";

const HomePage = () =>{
  const [notes,setNotes] = useState([])
 const fetchNotes = async () => { 
 try {
  const get = await getNotes();
  setNotes(get.data);
 } catch (error) {
  console.log("error fatching data",error);
 }
 }
 useEffect(()=>{
  fetchNotes()
 },[]);

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
 
  return(
    <div className="flex flex-wrap gap-4 justify-center mt-6" >
      {notes.map((note)=>{
        return <div key={note._id}>
          <NoteCard note={note} onDelete={handleDelete}></NoteCard>
        </div>
      })}
    </div>
  )
}

export default HomePage