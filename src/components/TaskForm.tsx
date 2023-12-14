// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTask } from '../redux/actions'
// import { Task } from '../redux/types'
 

const TaskForm = () => {
  return (
    <form className="flex flex-col items-center p-[10rem]">
        <h1 className="text-cyan-600 font-bold text-4xl text-center">Add your Tasks</h1>
        <div className="text-black flex flex-col my-5">
           <input
          type="text"
          placeholder="Task Name"
          className="bg-gray-00 p-2 rounded-lg my-2"
        />
         <textarea
          placeholder="Task Description"
          className="bg-gray-200 p-2 rounded-lg my-2"
        >
        </textarea>
      </div>
      <button type="submit" className="bg-cyan-700 justify-center my-10 text-white py-3 px-6 rounded-full font-bold text-2xl hover:bg-cyan-600">Add Task</button>
    </form>
  )
}

export default TaskForm
