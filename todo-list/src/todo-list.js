import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function ToDoList() {
    const [tasks,setTasks]=useState([])
    const [auxtasks,setAuxTasks]=useState([])
    const [task,setTask]=useState('')
    const handleTask=(e)=>{
        setTask(e.target.value)
    }
    const handleTasks=()=>{
        setTasks([...tasks,task])
    }
    function deleteTask(removeTask){
      tasks.map((task)=>{
        if(task!=removeTask){
          setAuxTasks([...auxtasks,task])
        }
      })
      setTasks(auxtasks)
      setAuxTasks([])
  }
  return (
    <div>
      <input type='text' onChange={handleTask}></input>
      <button onClick={handleTasks}>add</button>
      {tasks.map((task)=><h1>{task}  <button onClick={()=>deleteTask(task)}>delete</button></h1>)}
    
    </div>
  );
}

export default ToDoList;
