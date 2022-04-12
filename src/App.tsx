import React, {useEffect, useState} from "react";
import {AddTodo, Todo} from "./types.d";
import {TodoList} from "./components/TodoList";
import {AddTodoForm} from "./components/AddTodoForm";
import './App.css';

var initialTodos: Todo[] = [];

const storage_key = "todo_app_key";


const App = () => {

    //load from local storage
    let getLocalStorageData = localStorage.getItem(storage_key);
    if (getLocalStorageData == null) {
        initialTodos = [];
    } else {
        initialTodos = (JSON.parse(getLocalStorageData));
    }

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        //save to local storage
        localStorage.setItem(storage_key, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            console.log('before change complete',todo.complete);
            return todo;
        });
        console.log('new Todos after render',newTodos);
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text) => {
        const newTodo = {text: text, complete: false};
        setTodos([...todos, newTodo]);
    };

    return (
        <div className={'container'}>
            <header>To-do List</header>
            <p>Writing in box to add new task</p>
            <p>Click on task to complete</p>

            <AddTodoForm addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
    );
};
export default App;
