const NoteCard = ({ note }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-72 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{note.title}</h2>
      <p className="text-gray-600 mt-2">{note.content}</p>
    </div>
  );
};

export default NoteCard;
