import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Cabecalho from "./components/Header/Header";
import './App.css';
import Hero from './components/Hero/hero';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Modal from './components/Modal/modal'

function App() {
  const [showModal, setShowModal] = useState(true);
  const [isAdult, setIsAdult] = useState(false);

  const handleConfirm = () => {
    setIsAdult(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setIsAdult(false);
    setShowModal(false);
  };

  return (
    <>
     <Modal show={showModal} onClose={handleClose} onConfirm={handleConfirm} />
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<Signin />} />
        </Routes>
      </BrowserRouter>
      {isAdult && <Home />}
    </>
  );
}

export default App;