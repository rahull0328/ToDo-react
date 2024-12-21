import React from 'react'
import checked from '../assets/checked.png'
import delete_img from '../assets/delete.png'

const TodoItems = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={checked} alt="task_complete" className='w-7' />
            <p className='text-slate-700 ml-4 text-[17px]'>Todo List</p>
        </div>
        <img src={delete_img} alt="delete_img" className='w-7 cursor-pointer' />
    </div>
  )
}

export default TodoItems
