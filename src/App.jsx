import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import { TodoProvider, TodoContext } from './context'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let storetodos =JSON.parse( localStorage.getItem("todos"))
    if(storetodos && storetodos.length>0){
      setTodos(storetodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), todo, completed: false }])
    console.log(todos)
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>

        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((items, index) => {
                return <TodoItem key={items.id} todo={items} />
              })}



            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  )
}

export default App
