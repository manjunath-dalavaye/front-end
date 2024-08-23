import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todoSlice';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (!completed) {
      alert('Start the task!');
    } else {
      alert('Task is completed!');
    }

    dispatch(toggleTodo(id));
  };

  return (
    <li
      className={`p-4 border-b cursor-pointer ${completed ? 'line-through' : ''}`}
      onClick={handleToggle}
    >
      {title}
    </li>
  );
};

export default TodoItem;
