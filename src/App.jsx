import { useState } from 'react'
import TabelaIMC from './components/Tabela';


function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [result, setResult] = useState();

  const calcular = () => {
    const imc = peso / (+altura * +altura)
    setResult(imc.toFixed(2));
  }
  const classificacaoIMC = () => {
    if (result < 18.5) {
      return 'Abaixo do peso';
    } else if (result < 24.9) {
      return 'Peso normal';
    } else if (result < 29.9) {
      return 'Sobrepeso';
    } else if (result < 34.9) {
      return 'Obesidade grau 1';
    } else if (result < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };


  return (
    <div className='container'>
      <text className='text'>Calculadora IMC 2024</text> <br /><br />
      <label htmlFor="peso">Digite seu Peso (kg): </label>
      <input  className='input' type="number" value={peso} onChange={(e) => setPeso(Number(e.target.value))} />
      <label htmlFor="altura">Digite sua altura ex: 1,74: </label>
      <input className='input' type="number"  value={altura} onChange={(e) => setAltura(Number(e.target.value))}/>
      <button className='button' type='button' onClick={calcular}>Calcular</button>
      <h1 className='result'>IMC: {result}</h1>
      <h3 className='result'>Sua classificação: {classificacaoIMC()}</h3>
      <TabelaIMC/>
    </div>
  )
}

export default App
