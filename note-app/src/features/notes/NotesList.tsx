import { useEffect } from 'react';
import { fetchNotes, selectAllNotes, selectStatus } from './notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Note from './Note';
import Loading from '../../components/Loading';

const NotesList = () => {

    const dispatch = useDispatch<any>();
    const status = useSelector(selectStatus);
    const notes = useSelector(selectAllNotes);
    console.log(notes)
    const sortedNotes = [...notes].reverse()

    useEffect(() => {
        if(status === 'idle'){
          console.log("fetched")
            dispatch(fetchNotes())
        }
    }, [dispatch]);



  return (
    <div className='grid grid-cols-4 place-items-center'>
      {status === 'loading' && <Loading/>}
      {status === 'succeded' &&   sortedNotes.map((note) => <Note key={note.id} note={note}/>)}
      {status === 'failed' && <div>Error ...</div> }
      </div>
  )
}

export default NotesList