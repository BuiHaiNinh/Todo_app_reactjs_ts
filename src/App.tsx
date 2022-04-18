import React from "react";
import './App.css';
import {TodoList} from "./components/TodoList";
import {AddTodo} from "./components/AddTodo";

const App = () => {

    return (
        <div className={'container'}>
            <header>To-do List</header>
            <p>Writing in box to add new task</p>

            <AddTodo />
            <TodoList/>
        </div>
    );
};
export default App;
