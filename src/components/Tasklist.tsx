import React, { useState } from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  status: string;
}

const TaskList: React.FC = () => {
  const initialTasks: Task[] = [
    {
      id: 1,
      name: 'Cooking Beshbarmak',
      description: 'Have to cook beshbarmak for my family',
      completed: false,
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Pair Programming',
      description: 'Have to do pair programming with my friend',
      completed: true,
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Clean my room',
      description: 'Clean my room and make it tidy',
      completed: true,
      status: 'Pending',
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleStatusChange = (taskId: number, selectedStatus: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: selectedStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const getDotColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500';
      case 'in progress':
        return 'bg-orange-500';
      case 'pending':
        return 'bg-red-500';
      default:
        return '';
    }
  };

  return (
    <div className="h-90vh flex flex-col items-center px-[10rem] py-[5rem]">
      <h2 className="text-cyan-600 font-bold text-4xl text-center">Task List</h2>
      <ul className="py-[2rem] text-gray-300">
        {tasks.map(task => (
          <li key={task.id} className="bg-slate-900 rounded-md m-[2rem] py-2 px-4 flex items-center">
            <div className={`h-4 w-4 rounded-full ${getDotColor(task.status)} mr-2`} />
            <div className="flex-1">
              <h3 className="text-xl font-bold mt-3 mb-2">{task.name}</h3>
              <p>{task.description}</p>
            </div>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
              className="px-4 py-2 bg-cyan-600 text-white rounded-full"
            >
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
