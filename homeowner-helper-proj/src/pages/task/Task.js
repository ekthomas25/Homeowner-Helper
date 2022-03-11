import React from 'react';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';
import TaskDetail from './TaskDetail';
import LogList from '../../components/LogList';

import { useCollection } from '../../hooks/useCollection'
//styles
import './Task.css';

export default function Task() {
  const { id } = useParams();
  const {error, document } = useDocument('tasks', id);

  if(error) {
    return <div className="error">{error}</div>
  }

  if (!document) {
    return <div className="loading">loading...</div>
  }

  // const handleLogClick = (id) => {
  //   setLogDetail((task.logs).filter(log => log.id === id));
  //   setShowLogDetail(true)
  // }
  console.log(document.logs[0])
  return (
    <div className="home">
      <h1>{document.taskName}</h1>
      <div className="task-details">
        <TaskDetail task={document} />
        
      </div>
    </div>
    
  )
}