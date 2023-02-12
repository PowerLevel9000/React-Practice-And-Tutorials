import logo from './logo.svg';
import './App.css';
import greetAdarsh from './components/firstfunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! React I love you'
        </p>
        {greetAdarsh()}
      </header>
      
    </div>
  );
}

export default App;
