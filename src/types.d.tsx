import React from "react";

interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

export type {Todo, ToggleTodo, AddTodo};