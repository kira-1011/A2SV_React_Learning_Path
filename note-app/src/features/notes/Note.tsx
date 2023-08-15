import { Link } from 'react-router-dom'
import { NoteType } from './notesSlice'

const Note = ({ note }: {note: NoteType}) => {

  return (
    <Link to={`/notes/${note.id}`}>
    <div className="flex bg-blue-100 mb-12 flex-col px-4 py-2 border border-gray-400 rounded w-48 h-36 hover:border-gray-900">
        <h2 className="text-3xl font-bold truncate">{note.title}</h2>
        <p className='text-xl truncate'>
            {note.content}
        </p>
    </div>
    </Link>
  )
}

export default Note