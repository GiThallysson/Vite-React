// Divisao.jsx
import React from 'react';

const Divisao = (props) => {
  const resultado = props.num1 / props.num2;
  return <h2>O resultado de {props.num1} / {props.num2} é igual a {resultado}</h2>;
};

export default Divisao;

