import React from 'react';
import './App.css'
import Adicao from './Adicao';
import Multiplicacao from './components/Multiplicacao';
import Subtrativo from './components/Subtracao';
import Divisao from './components/Divisao';
import MultiplicacaoDeNumeros from './components/MultiplicacaoDeNumeros'
import PrecisoEstudar from './components/PrecisoEstudar';

function App() {

  const { g, resultado, num1, num2 } = Multiplicacao({ num1: 10, num2: 5 });
  
  return (
    <> 
      <div>
      <Adicao num1={num1} num2={num2} /> 
      {g}
      <h2>
      O resultado de {num1} * {num2} é igual a {resultado}
    </h2>
    <Subtrativo/>
    <Divisao num1={num1} num2={num2} />
    <PrecisoEstudar nomeDaTecnologia="React" />
    <p>
      Multiplica De 2 número
    </p>
      <MultiplicacaoDeNumeros/>
      </div>

    </>
  )
}

export default App
