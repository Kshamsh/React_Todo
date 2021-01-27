import React from "react"
import styles from "../styles/form.module.scss"

const Form = ({inputText,setInputText,todos,setTodos}) => {
    const inputTextFunc = (e) =>{
        setInputText(e.target.value)
    }
    const submitTodoFunc = (e) =>{
        e.preventDefault()
        setTodos([
            ...todos, {content:inputText,completed:false, id:Math.random() * 500}
        ])
        setInputText("")
    }
    const completeAllFunc = () => {
        setTodos(todos.map(item => {
            while(item.completed === false){
                return {
                    ...item, completed : true
                }
            }
            
            // if(item.completed === false){
            //     return {
            //         ...item, completed: true
            //     }
            // };
            if(item.completed === true){
                return{
                    ...item, completed: false
                }
            }
            
        }))
    }
    return (
        <form onSubmit={submitTodoFunc} 
        className={styles.form}>
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={completeAllFunc} className={styles.checkAllIcon} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
             </svg>
          <input value={inputText} 
            onChange={inputTextFunc}
            type="input"
            placeholder="What needs to be done?"
            className={styles.input}
            id="addinput"
          />
        </form>
    )
}
export default Form