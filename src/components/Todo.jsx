import React, { useEffect, useRef, useState } from "react";
import list_icon from '../assets/add.png'
import TodoItems from "./TodoItems";

const Todo = () => {

  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  //adding todo
  const add = () => {
    const inputText = inputRef.current.value.trim();

    //validation
    if(inputText === ""){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    }

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  }

  //deleting todo
  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  }

  const toogle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete};
        }
        return todo;
      })
    })
  }

  useEffect(() => {
  }, [todoList])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

      {/*  title */}
      <div className="flex items-center mt-3 gap-3">
        <img className="w-8 ms-24" src={list_icon} alt="list_icon" />
        <h1 className="text-3xl font-semibold">ToDo - List</h1>
      </div>

      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input ref={inputRef}  type="text" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder: text-slate-600" placeholder="Enter Task" />
        <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer" onClick={add}>ADD +</button>
      </div>

        {/* todo list */}
        <div>
          {todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toogle={toogle} />
          })}
        </div>

    </div>
  );
};

export default Todo;
