import React from 'react'

const TaskForm = () => {
  return (
    <form>
      <div>
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
