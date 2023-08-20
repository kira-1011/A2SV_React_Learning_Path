import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import { useState } from 'react';

const TaskInput = () => {

    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const onAddHandler = () =>  {

        if(task){
            dispatch(addTask({
              task,
              isCompleted: false
            }));

            setTask("");
        }
    }

  return (
    <div className='flex items-center justify-center gap-4'>
        <input className='outline-none px-4 py-2 rounded-lg shadow-lg shadow-blue-100' type="text" placeholder='Add new task' value={task} onChange={(e) => setTask(e.target.value)} />
        <MdAddCircle className='h-10 w-10 rounded-full hover:scale-125  transition duration-300 cursor-pointer' onClick={onAddHandler} />
    </div>
  )
}

export default TaskInput