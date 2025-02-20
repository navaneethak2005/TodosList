import './App.css';
import Header from './MyComponents/Header';
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
function App() {
  let todos=[
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
  ]
  return (
    <>
     <Header title="Todos list" searchBar={false} />
     <Todos todos={todos}/>
     <Footer/>
    </>

  );
}
export default App;
