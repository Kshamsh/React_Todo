import React from 'react';
import styles from "../styles/todo.module.scss"

const Todo = ({content,todo, todos,setTodos}) => {
    
    const deleteFunc = () => {
        setTodos(todos.filter((el) => el.id !==todo.id))
    }
    const completeFunc = () => {
    setTodos(todos.map(item => {
        if(item.id ===todo.id){
            return{
                ...item, completed: !item.completed
            };
        }
        return item
    }))
    }
    
    return(
        <div className={styles.todo}>
            <div className={styles.leftPart}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    onClick={completeFunc} className={`${styles.iconCheck} ${todo.completed ? styles.checkCompleted : ''}`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none">
                        </ path>
                        <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
                   <div className={styles.textContent}>     {content}
                   </div>
                </li>
            </div>   
                <svg xmlns="http://www.w3.org/2000/svg"
                onClick={deleteFunc} className={styles.removeIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none">
                    </path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                 </svg> 
        </div>
    )
}
export default Todo