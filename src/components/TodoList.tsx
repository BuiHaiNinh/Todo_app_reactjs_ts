import {useAppSelector} from "../hooks";
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    const todoList = useAppSelector((state) => state.todo.todoList);
    console.log(todoList);

    return <div>
        <h4>list</h4>
        <ul>
            {todoList.map((todo, index) => <TodoItem text={todo.text} complete={todo.complete} id={todo.id} key={index}/>)}
        </ul>
    </div>;
};