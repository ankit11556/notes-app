import { useEffect, useState } from "react"
import { getNotes } from "../api/api";
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
 },[])
 
  return(
    <div className="flex flex-wrap gap-4 justify-center mt-6" >
      {notes.map((note)=>{
        return <div key={note._id}>
          <NoteCard note={note}></NoteCard>
        </div>
      })}
    </div>
  )
}

export default HomePage