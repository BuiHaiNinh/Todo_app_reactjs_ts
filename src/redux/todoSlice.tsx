import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TodoState } from '../types';
import {text} from "stream/consumers";

//load storage
const storage_key = "todoList_key";
let getLocalStorageData = localStorage.getItem(storage_key);

type initialStateType = {
    todoList: TodoState[];
};

var todoList: TodoState[] =  getLocalStorageData ? (JSON.parse(getLocalStorageData)) : [
    {
        id: "111",
        text: '1984',
        complete: true,
    },
    {
        id: "222",
        text: "Harry Potter and the Philosopher's Stone",
        complete: false,
    },
];

const initialState: initialStateType = {
    todoList
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>) => {
            state.todoList.push(action.payload);
            console.log(todoList);
            //save to local storage
            localStorage.setItem(storage_key, JSON.stringify(todoList));
        },
        deleteTodo: (state, action:PayloadAction<{id: string}>) => {
            state.todoList = state.todoList.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
        editTodo: (state, action: PayloadAction<TodoState>) => {
            const {
                payload: {text, complete, id},
            } = action;

            state.todoList = todoList.map((todo) =>
                todo.id === id ? {...todo, text, complete} : todo
            );
        },
    },
});

export const {addTodo, deleteTodo, editTodo} = todoSlice.actions;
export const selectTodoList = (state: RootState) => state.todo.todoList;
export default todoSlice.reducer;

