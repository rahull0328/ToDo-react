import React from 'react'
import delete_img from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toogle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer' onClick={() => {toogle(id)}}>
            <img src={isComplete ? tick : not_tick} alt="task_complete" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through": ""}`}>{text}</p>
        </div>
        <img src={delete_img} onClick={() => {deleteTodo(id)}} alt="delete_img" className='w-7 cursor-pointer' />
    </div>
  )
}

export default TodoItems
  