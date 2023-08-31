import React, {Component} from "react"; 

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text:'To do something 1', completed: false },
                { id: 2, text:'To do something 2', completed: false },
                { id: 3, text:'To do something 3', completed: false },
            ],
        };
    }

    handleTodoClick = (id) => {
        this.setState ((prevState) => ({
            todos: prevState.todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo),
        }));
    };

    render () {
        return (
            <div>
                <h1>Список Тудушок</h1>
                <ul>
                    {this.state.todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => this.handleTodoClick(todo.id)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                    {todo.text}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default TodoList;