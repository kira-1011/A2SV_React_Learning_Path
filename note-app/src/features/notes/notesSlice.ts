import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { rootStateType } from "../../app/store";

export interface NoteType {
    id: string;
    title: string;
    content: string;
}


interface initStateType{
    notes: NoteType[],
    status: 'idle' | 'loading' | 'succeded' | 'failed',
    error: string | undefined;

}

// Thunk for fecthing notes
export const fetchNotes = createAsyncThunk('notes/notesFetched',async () => {
    const res = await axios.get("http://localhost:8000/notes")
    return res.data;
});

// Thunk for adding notes
export const addNotes = createAsyncThunk('notes/notesAdded',async (new_note: NoteType) => {
    const res = await axios.post("http://localhost:8000/notes", new_note);
    return res.data;
});

// Thunk for deleting notes
export const deleteNote = createAsyncThunk('notes/notesDeleted',async (noteId: string) => {
    await axios.delete("http://localhost:8000/notes/" + noteId);
    return noteId;
});


// Thunk for editing notes
export const editNote = createAsyncThunk('notes/notesEdited',async (new_note: NoteType) => {
    const res = await axios.put("http://localhost:8000/notes/" + new_note.id, new_note);
    return res.data;
});

const initialState: initStateType = {
    notes: [],
    status: 'idle',
    error: ""
}
const notesSlice = createSlice({

    name: "notes",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
        .addCase(fetchNotes.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchNotes.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.notes = action.payload;
        })
        .addCase(fetchNotes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
        .addCase(addNotes.fulfilled, (state, action) => {
            state.notes = action.payload;
        })
        .addCase(deleteNote.fulfilled, (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.filter((note) => note.id !== noteId);
        })
        .addCase(editNote.fulfilled, (state, action) => {
            let note = state.notes.forEach((note) => {
                if(note.id === action.payload.id){
                    note.title = action.payload.title
                    note.content = action.payload.content
                }
            });
        })
    }
});

export default notesSlice.reducer;

export const selectAllNotes = (state: rootStateType) => state.notes.notes;
export const selectStatus = (state: rootStateType) => state.notes.status;