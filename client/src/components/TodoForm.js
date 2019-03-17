import React from 'react';

class TodoForm extends React.Component {
  state = {name: ''}

  handleSubmit =(e)=> {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({name: ''})
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value});
  }

  render() {

    return(
      <div textAlign='center'>
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          autoFocus
          required
          placeholder='task'
          value={this.state.name}
          onChange={this.handleChange}
          />
      </form>
      </div>
    )
  }
}

export default TodoForm;