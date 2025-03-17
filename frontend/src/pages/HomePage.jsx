import { useEffect, useState } from "react"
import { getNotes } from "../api/api";
const HomePage = () =>{
  const [notes,setNotes] = useState([])
 const fetchNotes = async (params) => { 
  const get = await getNotes();
  alert(get.data.message);
  
  setNotes(get.data);
 }

 useEffect(()=>{
  fetchNotes()
 },[])
 
  return(
    <div>
      {notes.map((note)=>{
        return <div key={note._id}>
          <h2>{note.content}</h2>
        </div>
      })}
    </div>
  )
}

export default HomePage