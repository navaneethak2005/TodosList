import React from 'react'
import TodoItems from "./TodoItems";
const Todos = (props) => {
  let myStyle={
    minHeight:"70vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my3'>Todos List</h3>
      {props.todos.length===0 ? "No todos to display" :
      props.todos.map((todo)=>{
          return (
          <>
          <TodoItems todo={todo}  key={todo.sn} onDelete={props.onDelete}/><hr/>
          </>
          )
      })}
    </div>
  )
}

export default Todos
