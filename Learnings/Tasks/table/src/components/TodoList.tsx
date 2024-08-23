import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    // Add more tasks as needed
  ]);

  const handleTaskClick = (taskId: number) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (!tasks[taskIndex].completed) {
      alert('Starting the task...');
      tasks[taskIndex].completed = true;
      setTasks([...tasks]);
      alert('Task is completed');
    } else {
      alert('This task is already completed');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Todo List</h1>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            className={`p-4 mb-2 border ${task.completed ? 'bg-green-200' : 'bg-red-200'} cursor-pointer`}
            onClick={() => handleTaskClick(task.id)}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
