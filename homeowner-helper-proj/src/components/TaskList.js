import React from 'react';
import { useCollection } from '../hooks/useCollection';

//styles
import './TaskList.css'

const TaskList = () => {
  const { documents } = useCollection('tasks');
  return (
    <div className="task-list">
      {!documents && <p>No Tasks</p>}
      {documents && documents.map(doc => (
        <div className="task-item" key={doc.id}>{doc.taskName}</div>
      ))}
    </div>
  );
}

export default TaskList;