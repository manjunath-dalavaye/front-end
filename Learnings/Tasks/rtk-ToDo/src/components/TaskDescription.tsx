import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './TaskDescription.module.css';

const TaskDescription: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find(task => task.id === Number(id))
  );

  if (!task) {
    return <div className='error'>Task not found please add the respected task.</div>;
  }

  return (
    <div className={styles.descriptionContainer}>
      <h2>{task.content}</h2>
      <p>{task.description || 'No description provided.'}</p>
    </div>
  );
};

export default TaskDescription;
