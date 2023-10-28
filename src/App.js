import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header"
import AddToDo from "./MyComponent/AddTodo" 
import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import React, { useState ,useEffect} from 'react';
import About from "./MyComponent/About"
import {
  BrowserRouter as Router,
  Routes ,
  Route,
}from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[]
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete=(todo)=>{
    console.log("I am delete function",todo)
    //  deleting this way will not work
    // let index=todos.indexOf(todo)
    // todos.splice(index,1)

    setTodos(todos.filter((e)=>{
      return e!== todo;})) 
      console.log("deleted",todos)
      localStorage.setItem("todos",JSON.stringify(todos))
  }
  
  const addTodo=(title,desc)=>{
    console.log("This is add todo function ",title,desc)
    let sno;
    if(todos.length===0)
    {
        sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1
    } 
    const myTodo={
      sno:sno,
      title : title ,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }

  const [todos,setTodos]=useState(initTodo)
  console.log("hahaha this is lenght",todos.length)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
    <Router>
      <Header title="To Do List" search={true}/>      {/* // <!-- try change search to false--> */}
      <Routes>
        <Route  exact path="/" element={<>
            <AddToDo addTodo={addTodo}/> 
            <Todos todos={todos} onDelete={onDelete}/>
            </>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
       <Footer/> 
    </Router>     
 </>
);
}

export default App;

