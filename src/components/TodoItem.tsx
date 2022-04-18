import {useAppDispatch, useAppSelector} from "../hooks";
import {deleteTodo, editTodo} from "../redux/todoSlice";

export const TodoItem = ({text, complete, id} : {text: string, complete: boolean, id: string}) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <label>{text} : {id} : {complete}</label>
            <button
                onClick={() => dispatch(deleteTodo({id}))}
            >Delete
            </button>
            <button
                onClick={() => dispatch(editTodo({text,complete,id}))}
            >Edit
            </button>
        </li>
    );
};