import './App.css';
import Home from './Home'; 

function App() {
  const app = 'This is a React App';
  const url = 'https://www.google.com/';
  return (
    <div className="App">
    <Home />
      <h1 style={{color: 'white', background: 'red' }}>{app}</h1>
    </div>
  );
}

export default App;
