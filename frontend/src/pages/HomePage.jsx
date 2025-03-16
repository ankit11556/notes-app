import { useEffect, useState } from "react"
import { getNotes } from "../api/api";
const HomePage = () =>{
  
 
 const fetchNotes = async (params) => {
  const get = await getNotes();
  console.log(get.data);
 }

 useEffect(()=>{
  fetchNotes()
 },[])
 
  return(
    <div>
      <h1>My Notes</h1>

    </div>
  )
}

export default HomePage