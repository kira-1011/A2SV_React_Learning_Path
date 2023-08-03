import { useState, useContext } from 'react';
import Task_Model from '../models/Task_Model';
import { TaskContext } from '../context/Task_Context';
import { MdDelete, MdDone, MdEdit } from "react-icons/md"

const Task = ({ task, index } : {task: Task_Model, index: number }) => {

    const { tasks, setTasks, setIsDisabled } = useContext(TaskContext);
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const [ new_task, setNewTask ] = useState<Task_Model>({
        id: task.id,
        isCompleted: false,
        task: task.task
    });

    const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        if(!task.isCompleted){
            setEditMode(!editMode);
            console.log("edit mode", editMode);
            setIsDisabled(!editMode);
        }
    }

    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTasks(tasks.filter((t) => (t.id !== task.id)))
    };

    const confirmHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        
        if(new_task.task){
            tasks[index] = new_task;
            setTasks([...tasks]);
            setEditMode(!editMode);
            setIsDisabled(!editMode);
        }
    };

    console.log(task)

    return (
        
        <div className="flex justify-between p-4 bg-gray-100 rounded-md">
            
           <div className="flex space-x-6 w-1/2 md:w-1/4">
                <input
                    className="appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0"
                    type="checkbox"
                    onChange={(e) => {
                        task.isCompleted = !task.isCompleted;
                        setTasks([...tasks]);
                    }}
                    disabled={editMode}
                />

                { editMode && !task.isCompleted? 
                    <input
                        className="p-1" 
                        type="text" 
                        value={ new_task.task } 
                        onChange={ (e) => setNewTask({
                            id: task.id,
                            isCompleted: false,
                            task: e.target.value
                            }) 
                        }
                        /> :
                    <span className={`text-xl ${ task.isCompleted? "line-through" : "" } w-full overflow-auto`}>
                        {task.task}
                    </span>
                }
           </div>
            
            <div className='flex space-x-8 text-2xl'>
                
                {
                    editMode && !task.isCompleted?
                    <button onClick={confirmHandler}>
                        <MdDone/>
                    </button>
                    :
                    <button onClick={editHandler}>
                        <MdEdit/>
                    </button>
                }

                <button onClick={deleteHandler}>
                    <MdDelete/>
                </button>
            </div>

        </div>
    )
}

export default Task;