import React from "react";
import list_icon from '../assets/list.png'

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={list_icon} alt="list_icon" />
        <h1 className="text-3xl font-semibold">ToDo - List</h1>
      </div>
    </div>
  );
};

export default Todo;
