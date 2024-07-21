import './App.css'
import { BuscarDadosEffect } from './components/buscar-dados'
import Contador from './components/contador'
import { Formulario } from './components/form'
import InputControlado from './components/input-controlado'
import { ListaEstado } from './components/lista-estado'

function App() {

  return (
    <>
      <Contador></Contador>
      <BuscarDadosEffect></BuscarDadosEffect>
      <ListaEstado></ListaEstado>
      <Formulario></Formulario>
      <InputControlado></InputControlado>
    </>
  )
}

export default App
