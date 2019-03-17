import React, { Component } from 'react';
import { Divider, Container } from 'semantic-ui-react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios'




const styles = {
  cont: {
    backgroundColor: 'rgb(15, 15, 15)',

  }
}


class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    axios.get('api/items')
      .then(res =>
        this.setState({ todos: res.data })
      )
  }

  addItem = (name) => {
    const item = { name }
    axios.post('/api/items', { item })
      .then(res => {
        const { todos } = this.state;
        this.setState({ todos: [...todos, res.data] })
      })
  }

  updateTodo = (id) => {
    axios.put(`/api/items/${id}`)
      .then(res => {
        let todos = this.state.todos.map(t => {
          if (t.id === id)
            return res.data
          return t
        })
        this.setState({ todos })
      })
  }

  deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
      .then(() => {
        const { todos } = this.state;
        this.setState({
          todos: todos.filter(t => t.id !== id)
        })
      })
  }



  render() {
    return (
      <div>
        <Container textAlign='center'  >
          <TodoForm addItem={this.addItem} />
        </Container>
        <Container fluid style={styles.cont} className='App'>
          <Divider />
          <TodoList
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo} />
        </Container>
      </div>
    );
  }
}

export default App;
