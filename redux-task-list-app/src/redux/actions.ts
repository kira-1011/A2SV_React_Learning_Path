import { TaskType } from "../model/TaskType";

const TASK_ADDED = 'taskAdded'; 
const TASK_UPDATED = 'taskUpdated';
const TASK_REMOVED = 'taskRemoved';
const FILTER_SET = 'filterSet';

export type FilterType = 'all' | 'completed' | 'incomplete' ;

// defince Action types

interface taskAdded{
    type: string,
    payload: TaskType
}

interface taskUpdated{
    type: string,
    payload: { index: number, updatedTask: TaskType }
}

interface taskRemoved{
    type: string,
    payload: { index: number }
}

interface filterSet{
    type: string,
    payload: FilterType
}

export type taskActionType = taskAdded | taskRemoved | taskUpdated | filterSet;

// define action creators
const addTask = (task: TaskType): taskAdded => {
    return { 
        type: TASK_ADDED,
        payload: task  
    }
}

const removeTask = (index: number): taskRemoved  => {
    return { 
        type: TASK_REMOVED,
        payload: { index }  
    }
}

const updateTask = (index: number, updatedTask: TaskType): taskUpdated  => {
    return { 
        type: TASK_UPDATED,
        payload: { index, updatedTask }  
    }
}

const setFilter = (filter: FilterType): filterSet => {
    return {
        type: FILTER_SET,
        payload: filter
    }
}

export { addTask, removeTask, updateTask, setFilter, TASK_ADDED, TASK_REMOVED, TASK_UPDATED, FILTER_SET };