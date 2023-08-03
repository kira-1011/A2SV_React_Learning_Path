import { useContext } from 'react';
import { TaskContext } from '../context/Task_Context';
import { MdAdd } from "react-icons/md"

interface Props {
    onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Task_Adder = ({ onAdd }: Props) => {

    const { task, setTask, isDisabled } = useContext(TaskContext);
    
    console.log("is disabled: ", isDisabled)
    return (

        <div className="flex justify-center py-8 mb-8">
            <input 
                disabled={isDisabled}
                className="rounded-full text-2xl p-4 shadow-md w-1/2 outline-none shadow-gray-300 mr-4 focus:shadow-gray-400"
                type="text"
                value={task.task}
                onChange={(e) => setTask({
                    id: task.id,
                    isCompleted: false,
                    task: e.target.value
                })} 
            />

            <button 
                className="rounded-full p-4 bg-slate-200 text-4xl shadow-md hover:shadow-gray-400"
                onClick={ onAdd }    
            >
                <MdAdd/>
            </button>
        
        </div>
    )

}

export default Task_Adder;