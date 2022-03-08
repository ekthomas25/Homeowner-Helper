import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import LogList from './LogList';
function TaskDetail( {task } ) {
  const { selectTask } = useContext(TaskContext);
  return (
    
      <li onClick={() => selectTask(task.id)}>
      <div className="task-name">{task.taskName}</div>
      <div className="area">{task.area}</div>
      </li>
      
    
  )
}

export default TaskDetail;