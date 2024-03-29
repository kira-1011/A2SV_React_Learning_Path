import taskReducers from "./reducers";
import { createStore } from "redux";

const store = createStore(taskReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;