import React from 'react'
import TodoApp from './TodoApp';
import TodoList from './TodoList'

function App() {
  return (
    <div className='App'>
      <TodoList />
      <TodoApp />
    </div>
  );
}

export default App;