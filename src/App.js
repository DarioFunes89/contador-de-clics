import './App.css';
import logocontador from "./Imagenes/FreeCodeCamp_logo.svg.png"
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="logo-contador-contenedor">
        <img className="logo-contador"
        src={logocontador}
        alt="logo del contador" />
      </div>
      <div className='contenedor-contador'>
        <Contador numClic={numClics}/>
        <Boton 
        texto="Click"
        esBotonDeClic={true}
        hacerClick={manejarClic} />
        <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        hacerClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
