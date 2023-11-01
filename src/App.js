import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'; // Importa el componente Hero
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';

function App() {
  return (
    <div className="App">
      <Hero /> {/* Agrega el componente Hero aquí */}
      <div className="module">
        <Card1 />
        <Card2 />
      </div>
      <div className="module">
        <Card3 />
        <Card4 />
      </div>
    </div>
  );
}

export default App;