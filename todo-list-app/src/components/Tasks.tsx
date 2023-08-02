import Task_Model from '../models/Task_Model';
import Task from './Task';

const Tasks = ({tasks}: {tasks: Task_Model[]}) => {

    return (

        <div className="flex flex-col space-y-4 px-4">
            {tasks.map((task) => <Task task={task} />)}
        </div>
    )
}

export default Tasks;