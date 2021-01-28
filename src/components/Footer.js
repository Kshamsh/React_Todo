import React from 'react';
import styles from "../styles/footer.module.scss"

const Footer = ({todos,setTodos,setCurrentStatus}) => {
   const removeCompletedFunc = ()=> {
      setTodos(todos.filter((el) =>  el.completed !== true ))
   }
   const statusFunc = (e) =>{
     setCurrentStatus(e.target.value)
   }
  return(
        <footer className={styles.hide}>
        <div>
          <span id="total">{todos.filter(todo => todo.completed === false).length} </span>
          items left
        </div>
        <div className="display">
          <button onClick={statusFunc} className={styles.btn}value="All">All</button>

          <button onClick={statusFunc} className={styles.btn}value="Active">Active</button>

          <button onClick={statusFunc} className={styles.btn}value="Completed">Completed</button>
        </div>
        <button onClick={removeCompletedFunc} className={styles.btn}>Clear completed</button>
      </footer>
    )
}
export default Footer