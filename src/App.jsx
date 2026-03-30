import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  

  const saveToLS = (paramas) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    
  }
  

  const handleEdit = (e, id) => {
    let t = todos.filter(i=>i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()

  }

  const handleDelete = (e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }]);
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {       
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()

    
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-cyan-600 min-h-[80vh]">
        <div className="addtask my-5">
          <h2 className="text-lg font-bold">Add todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="bg-amber-50 w-1/5"
          />
          <button
            onClick={handleAdd}
            className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-5"
          >
            Add
          </button>
        </div>
        <input type="checkbox" checked={showFinished} id="" />Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length ===0 && <div className="m-5">No Todos to display</div>}
          {todos.map(item=>{
            return<div key={item.id} className="task flex w-1/4 my-3 justify-between">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted?"line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e)=>handleEdit(e, item.id)}
                    className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e)=>{handleDelete(e, item.id)}}
                    className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App;
