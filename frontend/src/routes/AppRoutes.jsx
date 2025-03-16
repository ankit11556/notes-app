import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import NotesPages from "../pages/NotesPages";
import AddNotePage from "../pages/AddNotePage";
const AppRoutes = () =>{
  return(
  <>
<Router>
<Navbar></Navbar>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/notes" element={<NotesPages/>}></Route>
  <Route path="/add-note" element={<AddNotePage/>}></Route>
</Routes>
</Router>
</>
  )
}

export default AppRoutes;