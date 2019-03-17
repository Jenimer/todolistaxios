import React from 'react';
import { Card } from 'semantic-ui-react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <Card.Group centered >
    { todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    )}
  </Card.Group>
)

export default TodoList;