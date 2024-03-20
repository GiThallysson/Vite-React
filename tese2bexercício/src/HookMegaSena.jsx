import React, { useState } from 'react';

const HookMegaSena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState('');
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {
    if (numerosSorteados.length === 6) {
      alert('Já temos 6 números sorteados!');
    } else {
      const novoNumero = Math.floor(Math.random() * 60) + 1;
      setNumeroSorteado(novoNumero);
      setNumerosSorteados([...numerosSorteados, novoNumero]);
    }
  };

  return (
    <div>
      <h2>Número sorteado: {numeroSorteado}</h2>
      <button onClick={sortearNumero}>Sortear Número</button>
      <h3>Números sorteados:</h3>
      <ul>
        {numerosSorteados.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookMegaSena;
