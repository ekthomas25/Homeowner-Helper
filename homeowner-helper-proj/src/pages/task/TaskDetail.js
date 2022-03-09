import React, { useState } from 'react';
import LogForm from '../../components/LogForm'
import LogList from '../../components/LogList';

export default function TaskDetail({ task }) {
  const [showLogForm, setShowLogForm] = useState(false)
  console.log(task)

  const handleShowLogForm = () => {
    setShowLogForm(true)
    console.log(showLogForm);
  }

  const handleCancelLogForm = () => {
    setShowLogForm(false)
  }

  return (
    <>
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
      <button className="btn" onClick={handleShowLogForm}>Complete Task</button>
    </div>
      {showLogForm && <LogForm task={task} handleCancelLogForm={handleCancelLogForm}/>}
      
      </>
  )
}