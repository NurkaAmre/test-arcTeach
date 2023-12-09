import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'
import { Task } from '../redux/types'
 

const TaskForm = () => {
  return (
    <form>
      <div>
        <h1>Add your Taks</h1>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
        ></textarea>
      </div>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
