import logo from './logo.svg';
import './App.css';
import greetAdarsh from './components/firstfunctional';
import Greet from './components/classComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! React I love you'
        </p>
        {greetAdarsh()}
        <Greet />
      </header>
      
    </div>
  );
}

export default App;
