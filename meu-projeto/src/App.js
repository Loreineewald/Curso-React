import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome= "Matheus" />
      <SayMyName nome= "João" />
      <SayMyName nome= {nome} />
      <Pessoa
        nome= "Rodrigo" 
        idade= "30" 
        profissao= "Programador" 
        foto="https://via.placeholder.com/150" 
        />
    </div>
  );
}

export default App;
