// import logo from './logo.svg';
import './App.css';
import Inputs from './components/input';
import Title from './components/title';
import todosData from './components/database';


function App() {
  const taskComponent = todosData.map(item=><Inputs key={item.id} item={item} />)
  return (
    <div className="App">
      
      <div className='tasks'>
        <Title />
        {taskComponent}
      </div>

    </div>


  );
}

export default App;
