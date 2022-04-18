import {useAppDispatch, useAppSelector} from "../hooks";
import React, {useState} from "react";
import {deleteTodo, editTodo, addTodo} from "../redux/todoSlice";
import {TodoState} from "../types";


export const AddTodo = () => {
    const dispatch = useAppDispatch();

    /*const todo = useAppSelector((state)=>
        state.todo.todoList.find((todo) => todo.id === id);
    );*/

    const [text, setText] = useState<string>("");
    const [id, setId] = useState<string>("");

    const handleOnSubmit = (e:any) => {
        e.preventDefault();
        dispatch(addTodo({ text, complete:false,id }));
        clearInputs()
    };

    const clearInputs = () => {
        setText("");
        setId("");
    };

    return (
        <form>
            <label>Enter text</label>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <label>Enter id</label>
            <input
                type="text"
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                }}
            />
            <button
                hidden={!text || !id}
                type="submit"
                onClick={handleOnSubmit}
            >Add
            </button>
        </form>

    );
};