import { combineReducers } from "redux"
import { TaskType } from "../model/TaskType"
import { FILTER_SET, FilterType, TASK_ADDED, TASK_REMOVED, TASK_UPDATED, taskActionType } from "./actions"

export interface StateType {
    tasks: TaskType[],
    filter: FilterType
}

const initialState: StateType = {
    tasks: [],
    filter: 'all'
}

const taskReducers = (state = initialState, action: taskActionType) => {

    switch (action.type) {


        case TASK_ADDED:

            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case TASK_UPDATED:

            const { index, updatedTask } = action.payload as { index: number, updatedTask: TaskType }

            const new_state = {
                ...state,
                tasks: [...state.tasks]
            }

            new_state.tasks[index] = updatedTask;

            return new_state

        case TASK_REMOVED:

            return {

                ...state,
                tasks: state.tasks.filter((task, i) => {
                    const { index } = action.payload as { index: number }
                    return i !== index;
                })
            }

        case FILTER_SET:
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }

}

export default combineReducers({
    tasks: taskReducers
});