import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { Task } from '../types/taskTypes';

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      description: taskDescription,
      completed: false,
      status: 'Pending',
    };
    dispatch(addTask(newTask));
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form className="flex flex-col items-center p-10">
      <h1 className="text-cyan-600 font-bold text-4xl text-center">Add your Tasks</h1>
      <div className="text-black flex flex-col my-5">
        <input
          type="text"
          placeholder="Task Name"
          className="bg-gray-100 p-2 rounded-lg my-2"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="bg-gray-200 p-2 rounded-lg my-2"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleAddTask}
        className="bg-cyan-700 justify-center my-10 text-white py-3 px-6 rounded-full font-bold text-2xl hover:bg-cyan-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
