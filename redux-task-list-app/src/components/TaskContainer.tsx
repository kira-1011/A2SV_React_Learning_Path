import TaskFilter from "./TaskFilter"
import TaskInput from "./TaskInput"
import TaskList from "./TaskList"

const TaskContainer = () => {
  return (
    <div className="space-y-8 md:text-xl">
        <TaskInput/>
        <TaskFilter/>
        <TaskList/>
    </div>
  )
}

export default TaskContainer