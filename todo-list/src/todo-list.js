import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [id, setid] = useState(0)
  const categories = ["Estudio", "Hogar", "Salud", "Ocio", "Otro"]
  const [onlyShow, setOnlyShow] = useState("todos")
  const [task, setTask] = useState(useState({
    nombre: "",
    categoria: "Estudio",
    id: 0,
  }))
  const handleFilter = (event) => {
    setOnlyShow(event.target.value);
  }
  const handleTask = (event) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.nombre) {
      setTask({ ...task, ["id"]: id })
      setTasks([...tasks, task])
      setid(id + 1)
      console.log(task)
    }
  }

  function deleteTask(removeTask) {

    setTasks(tasks.filter((task) => task.id != removeTask.id))

  }
  return (
    <div>
      <h2>filtro de categorias</h2>
      <select 
      value={onlyShow}
        onChange={handleFilter}
      >
        <option selected value="todos">todos</option>
        {categories.map((categoria) => <option selected value={categoria}>{categoria}</option>)}
      </select>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nombre">Task:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={task.nombre}
            onChange={handleTask}
          />
        </div>

        <div>
          <label htmlFor="nombre">Categoria</label>
          <select
            name="categoria"
            value={task["categoria"]}
            onChange={handleTask}
          >
            {categories.map((categoria) => <option selected value={categoria}>{categoria}</option>)}
          </select>

        </div>

        <button type="submit">add</button>
      </form>
      {tasks.filter((task) => onlyShow == task["categoria"] || onlyShow == "todos").map((task) => <h2>Tarea: {task["nombre"]}  / Categoria: {task.categoria} <button onClick={() => deleteTask(task)}>delete</button></h2>)}
    </div>
  );
}

export default ToDoList;
