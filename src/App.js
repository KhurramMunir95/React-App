import './App.css';

function App() {
  const app = 'This is a React App';
  const url = 'https://www.google.com/';
  return (
    <div className="App">
      <h1>{app}</h1>
      <a href={url}>Click this link</a>
    </div>
  );
}

export default App;
