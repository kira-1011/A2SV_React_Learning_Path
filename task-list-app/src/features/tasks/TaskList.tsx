import { useSelector } from "react-redux";
import Task from "./Task";
import { tasksSelector, filteByCompleteSelector, filteByIncompleteSelector } from "./tasksSlice";

const TaskList = () => {

    const tasks = useSelector(tasksSelector);
    const filterByComplete = useSelector(filteByCompleteSelector);
    const filterByIncomplete = useSelector(filteByIncompleteSelector);

    return (  
        <div className="space-y-4">

            {
                filterByComplete && tasks.map((task, i) => {
                    if(task.status){
                        return <Task key={i} index={i} task={task}/>
                    }
                })
            }

            {
                filterByIncomplete && tasks.map((task, i) => {
                    if(!task.status){
                        return <Task key={i} index={i} task={task}/>
                    }
                })
            }
            {
                !filterByComplete && !filterByIncomplete && tasks.map((task, i) => <Task key={i} index={i} task={task}/>)
            }
        </div>
    );
}
 
export default TaskList;