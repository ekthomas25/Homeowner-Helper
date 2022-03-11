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
    <div className="task-detail">
      <div className="first">
        <div className="task-summary">
        <h2>Next Due:</h2>{task.nextDue.toDate().toDateString()}
          <br/>
          <h2>Area:</h2>{task.area}
          <br/>
          <h2>Frequency:</h2>{task.frequency.label}
        </div>
      </div>

      <div className="task-about">
      <h2>About:</h2>
        <br/>
        {task.about}
      </div>
      

      <div className="material-list">
        <h2>Material List:</h2>
        <ul>
          {task.materialList.map(materialList => <li key={materialList}>{materialList}</li>)}
        </ul>
      </div>

      <div className="last">
        <button className="btn" onClick={handleShowLogForm}>Complete Task</button>
        <LogList className="log-listcolumn"task={task} />
      </div>
      {showLogForm && <LogForm task={task} handleCancelLogForm={handleCancelLogForm}/>}
      </div>
    </>
  )
}