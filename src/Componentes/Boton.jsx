import React from "react";
import "../Estilos/Boton.css"

function Boton ({ texto, esBotonDeClic, hacerClick }) {
  return (
    <button className= { esBotonDeClic ? "boton-clic" : "boton-reiniciar" } 
    onClick={hacerClick}>

      {texto}</button>
  );
}

export default Boton;