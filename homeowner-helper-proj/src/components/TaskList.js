import React from 'react';
// import { useCollection } from '../hooks/useCollection';
import { Link } from 'react-router-dom';

//styles
import './TaskList.css'

const TaskList = ({ tasks }) => {
  // const { documents } = useCollection('tasks');
  console.log({tasks})
  return (
    <div className="task-list">
      {!tasks && <p>No Tasks</p>}
      {tasks && tasks.map(task => (
        <Link 
          to={`/task/${task.id}`}
          key={task.id}
          className="task-item">

          {task.taskName}
          &nbsp;&nbsp;
          {task.area.label}
          &nbsp;&nbsp;
          {task.frequency.label}
          &nbsp;&nbsp;
          {task.nextDue.toDate().toDateString()}
        </Link>
        
      ))}
    </div>
  );
}

export default TaskList;

