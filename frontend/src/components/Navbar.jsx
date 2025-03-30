import {Link} from "react-router-dom"
const Navbar = () =>{
  return(
    <nav className="bg-blue-500 text-white p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-xl font-bold">Notes App</h1>
    <ul className="flex space-x-6">
      <li className="hover:text-gray-200">
        <Link to="/">Home</Link>
      </li>
    
      <li className="hover:text-gray-200">
        <Link to="/add-note">Add Note</Link>
      </li>
      <li className="hover:text-gray-200">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
    </nav>
   
  )
}

export default Navbar