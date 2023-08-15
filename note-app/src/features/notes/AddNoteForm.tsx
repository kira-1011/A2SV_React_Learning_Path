import { useDispatch } from "react-redux"
import { addNotes } from "./notesSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const AddNoteForm = () => {

    const dispatch = useDispatch<any>();
    const [ content, setContent ] = useState("");
    const [ title, setTitle ] = useState("");

    const isValid = Boolean(content) && Boolean(title);

  return (
    <section className="flex flex-col gap-12 items-center my-16">
    <h1 className="text-4xl">Add new Note</h1>
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
          onClick={(e) => {dispatch(addNotes({
            id: nanoid(),
            content,
            title
          }));
          setTitle('');
          setContent('');
        }}
          disabled={!isValid}
        >
          Add Note
        </button>
      </div>
    </form>
  </section>
  )
}

export default AddNoteForm