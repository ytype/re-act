import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TodoList from './components/TodoList'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
)