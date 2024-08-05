"use client"
import React from 'react'
import { useState } from 'react';

// import shadcn ui
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ListItem from './ListItem';

const TodoList = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if(todoText.trim()) {
        setTodo([
            ...todos,
            {
                id: Math.random(),
                text: todoText,
            }
        ])

        setCount(count + 1)
       
        setTodoText("");
    }
  };

  const removeTodo = (id) => {
    setTodo(todos.filter((todo)=>todo.id !== id))
    setCount(count-1)
  };

  const finishTodo = (id) => {
    setTodo(todos.filter((todo)=>todo.id !== id))
  }

  return (
      <div className=' flex flex-col gap-2 items-center justify-center mt-10'>
        <h1 className='flex items-center justify-center gap-6 text-4xl  font-bold text-blue-300 mb-6'>Todo List <span className='ml-3'>{count}</span></h1>
         
         {/* todo input form */}
         <form onSubmit={addTodo} className='w-[300px] mx-auto mb-5'>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input 
            type="text" 
            placeholder="Enter what you want ..."
            value={todoText}
            onChange={(e)=> setTodoText(e.target.value)}
            />
            <Button type="submit" variant='outline'>Add</Button>
          </div>
         </form>
        
        

       
        {/* border */}
         <div className='w-[300px] h-[2px] bg-blue-500 mb-10'></div>

        {/* listItem */}
        <ul className='flex flex-col gap-8'>
            {todos.map((todo)=> {
                return (
                    <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} finishTodo={finishTodo}/>
                )
            })}
        </ul>
      </div>
  )
}

export default TodoList