import React from 'react';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';
import TaskDetail from './TaskDetail';

export default function Task() {
  const { id } = useParams();
  const {error, document } = useDocument('tasks', id);

  if(error) {
    return <div className="error">{error}</div>
  }

  if (!document) {
    return <div className="loading">loading...</div>
  }

  return (
    <div className="task-details">
      <h1>{document.taskName}</h1>
      <TaskDetail task={document} />
    </div>
    
  )
}