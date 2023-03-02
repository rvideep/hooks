import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    STRIKE_TODO: 'strike-todo',
    DELETE_TODO: 'delete-todo'
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO: {
            if(action.payload) return [...state, {id: Date.now(), todo: action.payload, done: false}];
            return state;
        }
        case ACTIONS.STRIKE_TODO:
            return state.map(todo => {
                if(todo.id === action.payload) {
                    todo.done = !todo.done;
                }
                return todo
        });
        case ACTIONS.DELETE_TODO: 
            return state.filter(todo => todo.id !== action.payload);
        default: 
            return state;
    }
}

const Todo = () => {
    const [todo, setTodo] = useState('');
    //const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(reducer, []);
    const addTodo = () => {
        // setTodos(prevTodos => (
        //     [...prevTodos, {id: Date.now(), todo: todo}]
        // ))
        dispatch({type: ACTIONS.ADD_TODO, payload: todo});
        setTodo('');
    }
  return (
    <div>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
        {todos.map((todo, index) => (
            <TodoList key={index} todo={todo} dispatch={dispatch}/>
        ))}
    </div>
  )
}

export default Todo