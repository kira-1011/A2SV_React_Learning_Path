import { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/Task_Context';

const Tasks = () => {

    const { tasks } = useContext(TaskContext);

    return (

        <div className="flex flex-col space-y-4 px-8">
            {tasks.map((task, i) => <Task key={i} index={i} task={task}/>)}
        </div>
    )
}

export default Tasks;