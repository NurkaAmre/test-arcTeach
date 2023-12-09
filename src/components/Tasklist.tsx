const TaskList = () => {
  const tasks = [
    {
      name: 'Example Task 1',
      description: 'Description for Example Task 1',
      completed: false,
      status: 'Pending',
    },
    {
      name: 'Example Task 2',
      description: 'Description for Example Task 2',
      completed: true,
      status: 'Completed',
    },
      {
      name: 'Example Task 3',
      description: 'Description for Example Task 3',
      completed: true,
      status: 'Completed',
    },

  ];

  const toggleTask = (index: number) => {
    console.log(`Toggled task at index ${index}`);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
            <p>{task.description}</p>
            <span>Status: {task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

