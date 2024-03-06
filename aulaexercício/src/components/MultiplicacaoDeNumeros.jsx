import React from 'react';

function MultiplicacaoDeNumeros() {
  
  const numerolista = [1, 2, 3, 4, 5];

  // Utilize a função map para repetir sobre a lista e multiplicar cada número por 2
  const numerosMultiplicados = numerolista.map(numero => numero * 2);

  // Retorne a nova lista de números multiplicados
  return (
    <div>
      <h2>Números Originais:</h2>
      <ul>
        {numerolista.map(numero => (
          <li>{numero}</li>
        ))}
      </ul>
      <h2>Números Multiplicados:</h2>
      <ul>
        {numerosMultiplicados.map(numero => (
          <li>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default MultiplicacaoDeNumeros;

