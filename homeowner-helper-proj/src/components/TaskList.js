import React from 'react';
import { useCollection } from '../hooks/useCollection';
import { Link } from 'react-router-dom';

//styles
import './TaskList.css'

const TaskList = () => {
  const { documents } = useCollection('tasks');
  return (
    <div className="task-list">
      {!documents && <p>No Tasks</p>}
      {documents && documents.map(doc => (
        <Link to={`/task/${doc.id}`}className="task-item" key={doc.id}>
          {doc.taskName}
          &nbsp;&nbsp;
          {doc.area.label}
          &nbsp;&nbsp;
          {doc.frequency.label}
          &nbsp;&nbsp;
          {doc.nextDue}
        </Link>
        
      ))}
    </div>
  );
}

export default TaskList;

