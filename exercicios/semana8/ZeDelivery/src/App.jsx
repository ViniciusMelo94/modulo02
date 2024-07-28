import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from "./components/Header/Header";
import './App.css';
import Hero from './components/Hero/hero';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;