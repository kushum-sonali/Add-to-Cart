// import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import {Routes,Route} from "react-router-dom"
import CardDetailes from './Components/CardDetailes';
import Cards  from './Components/Cards';
function App() {
  return (
    <>
     <Header/>
    <Routes>
      <Route path='/'element={<Cards/>}/>
      <Route path='/cart'element={<CardDetailes/>}/>
    </Routes>
   
    </>
  );
}

export default App;
