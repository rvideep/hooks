import React from 'react'
import { ACTIONS } from './Todo'

const TodoList = ({todo, dispatch}) => {
    const strikeStyle = {
        textDecoration: todo.done ? 'line-through' : 'none'
    }
    const strike = () => {
        dispatch({type: ACTIONS.STRIKE_TODO, payload: todo.id})
    }
    const del = () => {
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo.id});
    }
  return (
    <div>
        <span style={strikeStyle}>{todo.todo}</span>
        <button onClick={strike}>strike</button>
        <button onClick={del}>delete</button>
    </div>
  )
}

export default TodoList