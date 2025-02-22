import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import Addtodo from "./MyComponents/Addtodo";
import React,{useState} from 'react';
function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this work done"
    },
    {
      sno:1,
      title:"Go to the moll",
      desc:"You need to go to the market to get this work done 2"
    },
    {
      sno:1,
      title:"Go to the gchat",
      desc:"You need to go to the market to get this work done 3"
    }
  ]);
  return (
    <>
     <Header title="Todos list" searchBar={false} />
     <Addtodo/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>

  );
}
export default App;
