const Button = ({text,onClick}) =>{
  
  return (
 <button 
 className="bg-blue-500 text-white p-1 mt-1 rounded-md hover:cursor-pointer hover:bg-blue-400" 
  onClick={onClick}>
 {text}</button>
  )
}

export default Button