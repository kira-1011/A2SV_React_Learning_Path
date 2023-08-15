import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { NoteType, deleteNote, selectAllNotes } from "./notesSlice";

const NotePage = () => {
  const { noteId } = useParams();
  const note = useSelector(selectAllNotes).find((note: NoteType) => note.id === noteId);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  console.log(useSelector(selectAllNotes))
  console.log(noteId);

  const deleteHandler = () => {
    if (note) {
      dispatch(deleteNote(note.id));
      navigate("/");
    }
  };

  return (
    <div className="p-4">
      {note ? (
        <div className="space-y-12">
          <Link to="/">
            <button className="rounded-full border border-gray-400  px-4 py-2 hover:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </Link>

          <div className="flex flex-col p-8 items-center gap-12 overflow-auto
          ">
          <h1 className="font-bold text-4xl">{note.title}</h1>

            <p className="text-2xl">{note.content}</p>

            <div className="space-x-4">
              <button>
                <Link
                  className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
                  type="button"
                  to={`/notes/${note.id}/edit`}
                >
                  Edit Note
                </Link>
              </button>
              <button
                onClick={deleteHandler}
                className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
              >
                Delete Note
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>Note not found</h1>
        </>
      )}
    </div>
  );
};

export default NotePage;
