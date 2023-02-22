import React from 'react'
import './App.css';
import Inputs from './components/input';
import Title from './components/title';
import todosData from './components/database';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          // Create a new object with updated completed value
          return {...todo, completed: !todo.completed}
        }
        return todo
      })

      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const taskComponent = this.state.todos.map(item => (
      <Inputs key={item.id} item={item} handleChange={this.handleChange} />
    ))

    return (
      <div className="App">
        <div className='tasks'>
          <Title />
          {taskComponent}
        </div>
      </div>
    );
  }
}

export default App;
