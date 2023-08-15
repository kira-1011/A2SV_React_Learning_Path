import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { rootStateType } from "../../app/store";
import { useState } from "react";
import { NoteType, editNote } from "./notesSlice";

const EditNoteForm = () => {

  const navigate = useNavigate();
  const { noteId } = useParams();

  const note = useSelector((state: rootStateType) =>
    state.notes.notes.find((note) => note.id === noteId)
  ) as NoteType;

  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);

  const dispatch = useDispatch<any>();

  const isValid = Boolean(title) && Boolean(content);

  const onSubmitHandler = async() => {
    await dispatch(editNote({
      id: note.id,
      title,
      content
    })).unwrap();

    navigate(-1);
  }

  return (
    <div className="p-4 space-y-12">
      <div>
        <button
          onClick={(e) => navigate(-1)}
          className="rounded-full border border-gray-400  px-4 py-2 hover:shadow-md"
        >
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
      </div>
      <div className="flex justify-center">
        <form className="w-1/4 flex flex-col gap-2">
          <label className="text-xl" htmlFor="title">
            Title
          </label>
          <input
            className="outline-none shadow-md shadow-gray-300 px-4 py-2 rounded focus:shadow-gray-400"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="mt-8 text-xl" htmlFor="content">
            Content
          </label>
          <textarea
            className="outline-none shadow-md shadow-gray-300 px-4 py-2 rounded focus:shadow-gray-400"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="mt-8">
            <button
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500"
              type="button"
              onClick={onSubmitHandler}
              disabled={!isValid}
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNoteForm;
