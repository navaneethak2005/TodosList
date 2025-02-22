import React from 'react'
import TodoItems from "./TodoItems";
const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='my3'>Todos List</h3>
      {props.todos.length===0 ? "No todos to display" :
      props.todos.map((todo)=>{
          return <TodoItems todo={todo}  key={todo.sn} onDelete={props.onDelete}/>
      })}
    </div>
  )
}

export default Todos
