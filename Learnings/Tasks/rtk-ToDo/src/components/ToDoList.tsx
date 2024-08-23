import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTask, removeTask, updateTask, toggleTask } from '../redux/slices/taskSlices';
import { useNavigate } from 'react-router-dom';
import styles from './TodoList.module.css';

// Define the structure of a Task object
interface Task {
  id: number;
  content: string;
  description?: string;
  completed: boolean;
}

// Define the TodoList component using React Functional Component syntax
const TodoList: React.FC = () => {
  // Access the list of tasks from the Redux store
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  
  // Initialize the dispatch function to send actions to the Redux store
  const dispatch = useDispatch<AppDispatch>();
  
  // Local state for managing input values and UI interactions
  const [taskText, setTaskText] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  
  // React Router hook to navigate between pages
  const navigate = useNavigate();

  // useEffect hook to handle alert display if no tasks are added
  useEffect(() => {
    if (!showAlert) return;

    // Show an alert if no tasks are added within a certain time
    const timer = setTimeout(() => {
      if (tasks.length === 0) {
        alert("You haven't added any tasks yet. Please add a task to your list.");
      }
    }, 100000);

    // Cleanup timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [tasks, showAlert]);

  // Function to handle adding or updating a task
  const handleAddOrUpdateTask = () => {
    if (taskText.trim()) {
      if (editingTask) {
        // Update an existing task
        dispatch(updateTask({
          id: editingTask.id,
          content: taskText,
        }));
        setEditingTask(null);
      } else {
        // Add a new task
        dispatch(addTask({
          content: taskText,
          description: taskDescription
        }));
        
        // Show a success alert after adding a task
        setTimeout(() => {
          alert('Task added successfully! Please make sure to complete it.');
        }, 3000);
        setShowAlert(false);
      }
      
      // Clear input fields
      setTaskText('');
      setTaskDescription('');
    } else {
      // Show an alert if the input is empty
      alert('Please add content before adding a task');
    }
  };

  // Function to handle editing a task
  const handleEditTask = (taskToEdit: Task) => {
    setTaskText(taskToEdit.content);
    setTaskDescription(taskToEdit.description || '');
    setEditingTask(taskToEdit);
  };

  // Function to handle removing a task
  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
    alert('Task removed successfully!');
  };

  // Function to toggle the completion status of a task
  const handleToggleComplete = (id: number) => {
    dispatch(toggleTask(id));
    const task = tasks.find(t => t.id === id);
    if (task && !task.completed) {
      // Navigate to a success page if a task is marked as complete
      navigate('/success', { state: { taskContent: task.content } });
    }
  };

  // useEffect to show or hide the alert based on the number of tasks
  useEffect(() => {
    if (tasks.length === 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [tasks]);

  // Function to navigate to a detailed description page for a task
  const handleShowDescription = (id: number) => {
    navigate(`/description/${id}`);
  };

  // Function to toggle the visibility of a task's menu
  const toggleMenu = (id: number) => {
    setActiveTaskId(activeTaskId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add or edit a task"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a description (optional)"
      />
      <button onClick={handleAddOrUpdateTask}>
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
              {t.content}
            </span>
            <div>
              <button className={styles['menu-button']} onClick={() => toggleMenu(t.id)}>Menu</button>
              {activeTaskId === t.id && (
                <div className={styles.menu}>
                  <div className={styles.edit} onClick={() => handleEditTask(t)}>Edit</div>
                  <div className={styles.remove} onClick={() => handleRemoveTask(t.id)}>Remove</div>
                  <div className={styles.description} onClick={() => handleShowDescription(t.id)}>Description</div>
                  {!t.completed && <div className={styles.complete} onClick={() => handleToggleComplete(t.id)}>Complete</div>}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
