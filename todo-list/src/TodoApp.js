import React, { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !=='') {
            setTodos ([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Add List</h1>
            <ul>
                {todos.map ((todo, index) => (
                    <li key = {index} onClick = {() => toggleTodo (index)} style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div>
                <input type='text' placeholder='Add todo' value={ inputValue } onChange= {(e) => setInputValue(e.target.value)}/>
                <button onClick={addTodo}>Add</button>
            </div>
        </div>
    )
};

export default TodoApp;




