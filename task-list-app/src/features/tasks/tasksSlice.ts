import { createSlice } from "@reduxjs/toolkit";
import { TaskModel } from "./Task";

interface initStateType{
    tasks: TaskModel[],
    filter_by_complete: boolean,
    filter_by_incomplete: boolean
}

const tasks: TaskModel[] = [];

export const tasksSlice = createSlice({
    name: "tasks",
    initialState : {
        tasks,
        filter_by_complete: false,
        filter_by_incomplete: false
    },
    reducers: {
        // Reducer to add new task
        taskAdded: (state, action) => {
            state.tasks.push(action.payload);
        },

        // Reducer to update a task
        taskUpdated: (state, action) => {
            state.tasks[action.payload.index] = action.payload.task;
        },

        // Reducer to remove task( Immer expects us to mutate the state or make a new state )
        taskRemoved: (state, action) => {
            state.tasks = state.tasks.filter((element) => element.id !== action.payload);
        },

        setComplete: (state, action) => {
            state.filter_by_complete = action.payload;
        },
         setIncomplete: (state, action) => {
            state.filter_by_incomplete = action.payload;
        }
        
    }
});

export const tasksSelector = (state: { tasks: initStateType }) => state.tasks.tasks;

export const filteByCompleteSelector = (state: { tasks: initStateType }) => state.tasks.filter_by_complete;

export const filteByIncompleteSelector = (state: { tasks: initStateType }) => state.tasks.filter_by_incomplete;

export default tasksSlice.reducer;