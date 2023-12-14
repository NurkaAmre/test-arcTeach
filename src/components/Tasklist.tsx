import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus } from '../redux/actions';
import { Task } from '../types/taskTypes';

const TaskList: React.FC = () => {
  const tasks: Task[] = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  const handleStatusChange = (taskId: number, selectedStatus: string) => {
    dispatch(updateTaskStatus(taskId, selectedStatus));
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
    <div className="h-90vh flex flex-col items-center px-10 py-5">
      <h2 className="text-cyan-600 font-bold text-4xl text-center">Task List</h2>
      <ul className="py-2 text-gray-300">
        {tasks.map((task) => (
          <li key={task.id} className="bg-slate-500 rounded-md m-2 py-2 px-4 flex items-center">
            <div className={`h-4 w-4 rounded-full ${getDotColor(task.status)} mr-2`} />
            <div className="flex-1">
              <h3 className="text-xl font-bold">{task.name}</h3>
              <p>{task.description}</p>
            </div>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
              className="px-4 py-2 rounded bg-gray-300 text-gray-700"
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
