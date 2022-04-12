import React from "react";
import {Todo, ToggleTodo} from "../types.d";
import {TodoListItem} from "./TodoListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <div className={'todo-list'}>
            <ul>
                {todos.map((todo) => (
                    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

