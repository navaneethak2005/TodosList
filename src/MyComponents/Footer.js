import React from 'react'

 export const Footer = () => {
  let footerStyle={
    border: "2px solid red",
    position: "absolute",
    top: "100vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; MyTodoslist.com
      </p>
    </footer>
  )
}

export default Footer
