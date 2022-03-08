import React from 'react';

import LogList from '../../components/LogList';

export default function TaskDetail({ task }) {
  console.log(task)
  return (
    <div className="task-detail-view">
      <div className="task-summary">
        <span>Next Due: </span>{task.nextDue.toDate().toDateString()}
        <br/>
        <span>Area: </span>{task.area}
        <br/>
        <span>Frequency: </span>{task.frequency.label}
      </div>
      <div className="task-about">
        <span>About:</span>
        <br/>
        {task.about}
      </div>
      <div className="material-list">
        <span>Material List:</span>
        <ul>
          {task.materialList.map(materialList => <li key={materialList}>{materialList}</li>)}
        </ul>
      </div>
    </div>
      
    
  )
}