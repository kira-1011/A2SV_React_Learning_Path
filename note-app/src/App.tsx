import AddNoteForm from './features/notes/AddNoteForm';
import NotesList from './features/notes/NotesList';

function App() {
  return (
    <div className="text-gray-500 p-8">
      <AddNoteForm/>
      <h1 className='text-3xl text-center mb-12'>Notes</h1>
      <NotesList/>
    </div>
  );
}

export default App;
