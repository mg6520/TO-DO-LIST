import React from 'react'

export default function Footer() {
  let footerStyle={
    positon:"relative",
    top:"70vh",
    width:"100%"
     
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
          Copyright &copy; MyTodoList.com
      </p>   
    </footer>
  ) 
}