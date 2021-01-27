import React from 'react';
import styles from "../styles/footer.module.scss"

const Footer = ({todos}) => {
    
  return(
        <footer className={styles.hide}>
        <div>
          <span id="total">{}</span>
          items left
        </div>
        <div className="display">
          <button  className={styles.btn}>All</button>
          <button  className={styles.btn}>Active</button>
          <button  className={styles.btn}>Completed</button>
        </div>
        <button  className={styles.btn}>Clear completed</button>
      </footer>
    )
}
export default Footer