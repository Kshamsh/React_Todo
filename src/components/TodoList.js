import React from 'react';
import styles from "../styles/todolist.module.scss";
import Todo from "./Todo"


const TodoList = ({todos , setTodos}) => {
    return(
        <div className="todo-container">
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    content={todo.content} 
                    id={todo.id} 
                    completed={todo.completed}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList