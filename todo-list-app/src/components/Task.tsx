import Task_Model from '../models/Task_Model';

const Task = ({ task }: { task: Task_Model }) => {

    const editHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

    return (
        
        <div className="flex justify-between p-4 bg-gray-100 rounded-md">
            
            <input
                className="appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white mt-1 checked:bg-blue-800 checked:border-0"
                type="checkbox"
            />

            <h2 className="text-xl">
                {task.task}
            </h2>

            <div className='flex space-x-8'>
                <button className="">
                    Edit
                </button>

                <button className="">
                    Delete
                </button>
            </div>

        </div>
    )
}

export default Task;