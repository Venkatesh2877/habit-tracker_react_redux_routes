import { createStore } from "redux";
import { taskReducer } from "../redux/reducer";

export const store = createStore(taskReducer);
