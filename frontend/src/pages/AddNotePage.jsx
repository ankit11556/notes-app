import { useState } from "react"
import { addNote } from "../api/api"
import {useNavigate} from "react-router-dom"

const AddNotePage = () =>{
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("");
 const navigate = useNavigate()

 //Post
  const handleSubmit = async (e) =>{
  e.preventDefault();
  if (!title || !content) {
    alert("Title and Content are required")
    return;
  }

   try {
    const response = await addNote({title,content});
    alert(response.data.message);
    navigate("/")
   } catch (error) {
    alert(response.data.message)
   }
  }

  return(
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 ">Add New Note</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Title" 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)} 
        className="border p-2"
        />

        <textarea placeholder="Content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        className="border p-2">
        </textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 hover:cursor-pointer">Add Note</button>
      </form>
    </div>
  )
}

export default AddNotePage