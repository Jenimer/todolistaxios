import React from 'react';
import { Card, Divider, Checkbox, Segment } from 'semantic-ui-react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {
    cursor: 'pointer',
    color: '#61dafb',
    padding: 'none',
    margin: 'none',
    backgroundColor: 'grey'
  },

}


const Todo = ({ id, complete, name, updateTodo, deleteTodo }) => (
  <Card color='grey'>
    <Card.Content textAlign='center'>
      <div style={complete ? styles.complete : {}} >
        {name}
      </div>
      <Divider />
      <Checkbox
        label='Complete'
        id={`item-${id}`}
        type='checkbox'
        defaultChecked={complete}
        onClick={() => updateTodo(id)}
      />


      <Segment style={styles.pointer} onClick={() => deleteTodo(id)}>Delete</Segment>
    </Card.Content>
  </Card>
)

export default Todo;