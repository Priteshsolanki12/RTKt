import React from 'react'
import { useDispatch } from 'react-redux'

function TodoList() {
    const todos = useSelacter((state)=>state.todo)
    console.log(todos,"todolist")
    const dispatch = useDispatch
    const [task,setTask] = useState("")
  return (
    <>
      <input type="text" value= {task} onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAdd}> add task </button>

      { todos.map(todo=>(
        <li key={todo.id}>{todo.text} <button onClick={()=>dispatch(removetodo(todo.id))}></button></li>
      ))}
    </>
  )
}

export default TodoList