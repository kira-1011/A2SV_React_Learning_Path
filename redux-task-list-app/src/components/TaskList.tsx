import { useSelector } from "react-redux";
import { StateType } from "../redux/reducers";
import { Task } from "./Task";

const TaskList = () => {
  const { tasks, filter } = useSelector(
    (state: { tasks: StateType }) => state.tasks
  );

    // Filter tasks based on selected filters
    const filteredTasks = tasks.filter((task) => {
      if(filter === 'all') return true;
      if(filter === 'completed') return task.isCompleted;
      if(filter === 'incomplete') return !task.isCompleted;
    })

  return (
    <div className="bg-white rounded-lg">
      {filteredTasks.map((task, i) => <Task key={i} index={i} task={task} />)}
    </div>
  );
};

export default TaskList;
