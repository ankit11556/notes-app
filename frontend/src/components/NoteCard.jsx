import Button from "../components/Button";
const NoteCard = ({ note,onDelete}) => {
  const handleDelete = () =>{
 onDelete(note._id)
  }
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-72 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
      <p className="text-gray-600 mt-2">{note.content}</p>
      <div className="flex gap-4">
      <Button text={"Delete"} onClick={handleDelete}></Button>
      <Button text={"Update"}></Button>
      </div>
    </div>
  );
};

export default NoteCard;
