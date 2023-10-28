import React from 'react'
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let myStyle={
    margin:"40px auto"
  } 

  return (
    <div className="container" style={myStyle}>
       <h3 lassName="my-3">To Do list</h3>
       {
        props.todos.length===0?"Hurry.! All work is Done":
        props.todos.map((todo)=>{
        return ( 
                <>
                {/* these blank Brackets are used return more than one thing */}
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                <hr/>
                <br/>
                </>
        )})}
    </div>
  )
}
 