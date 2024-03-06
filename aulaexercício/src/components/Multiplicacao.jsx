// Multiplicacao.jsx
import React from 'react';

const Multiplicacao = ({ num1 ,  num2}) => {

  const resultado = num1 * num2;
   const g = <p> multiplique </p>;
  return { g, resultado, num1, num2 };
};

export default Multiplicacao;
