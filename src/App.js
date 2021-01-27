import React,{useState} from 'react';
import styles from './styles/app.module.scss'
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([])
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
          <header className={styles.headerContainer}>
            <h1 className={styles.header}>todos</h1>
          </header>
          <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}/>
          <TodoList todos={todos} setTodos={setTodos}/>
          <Footer todos={todos}/>
        </div> 
    </div> 
  );
}

export default App;
