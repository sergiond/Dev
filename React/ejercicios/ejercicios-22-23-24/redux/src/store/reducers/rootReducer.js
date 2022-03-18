import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

// es una combinación de reducers, es un objeto que recibe por un lado, el nombre del estado : el nombre del reducer que lo va a controlar
export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
        //...y demás reducer que tengamos...
    }
)