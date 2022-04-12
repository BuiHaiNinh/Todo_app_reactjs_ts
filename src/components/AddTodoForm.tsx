import React, {useState} from "react";
import {AddTodo} from "../types.d";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');

    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button
                hidden={!text}
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >Add
            </button>
        </form>
    );
};
