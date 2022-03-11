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
      <div className="list-header">
        <div className="list-name">
          Name:
        </div>
        <div className="list-area">
          Area:
        </div>
        <div className="list-frequency">
          Frequency:
        </div>
        <div className="list-due">
          Next Due:
        </div>
      </div>
      
      <ul>
        {!tasks && <p>No Tasks</p>}
        {tasks && tasks.map(task => (
          <Link 
            to={`/task/${task.id}`}
            key={task.id}
            className="task-item">
            <li>
            <div className="task-cat-1">
              {task.taskName}  
            </div>
            <div className="task-cat-1">
              {task.area}
            </div>
            <div className="task-cat-1">
              {task.frequency.label}
            </div>
            <div className="task-cat-1">
              {task.nextDue.toDate().toDateString()}
            </div>
            </li>
            
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

