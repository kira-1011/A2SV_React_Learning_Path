interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Task_Adder = ({task, setTask, onAdd}: Props) => {

    console.log(task)
    return (

        <div className="flex justify-center py-8">
            <input 
                className="rounded-full text-2xl p-4 shadow-md w-1/2 outline-none shadow-gray-300 mr-4 focus:shadow-gray-400"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)} 
            />

            <button 
                className="rounded-full p-4 bg-slate-200 text-2xl shadow-md shadow-gray-400"
                onClick={ onAdd }    
            >
                Add
            </button>
        
        </div>
    )

}

export default Task_Adder;