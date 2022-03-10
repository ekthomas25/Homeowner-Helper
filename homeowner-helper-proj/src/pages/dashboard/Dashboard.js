import React, { useState } from 'react';
import NextDue from './NextDue'
import { timestamp } from '../../firebase/config'

import { useCollection } from '../../hooks/useCollection'
import PastDue from './PastDue';

//styles
import './Dashboard.css'

export default function Dashboard() {
  const { id } = useParams();
  const {error, document } = useDocument('tasks', id);
  
  // console.log({documents})
  console.log(Date.now()/1000)
  console.log(timestamp.fromDate(new Date()).seconds)

  // const datess = documents.filter(document => (document.nextDue < (Date.now()/1000)))
  const now = Date.now()/1000
  // const dates = documents ? documents.filter(document => {
  //   document.nextDue.fromDate(new Date()).seconds > (Date.now()/1000)
  // }) : null

// if (doc.nextDue.fromDate(new Date()).seconds < now) {
//   console.log('hello')
// }
  // console.log(documents)
  
  return (
    <div className="home">
      <h2>Today's Date: {new Date().toDateString()}</h2>
      <PastDue />
      <div className="blorp">
        <NextDue />
      </div>
      {/* {dates} */}
      {/* <NextDue tasks={documents} /> */}
      {/* <h1>Your Tasks:</h1>
      {documents && <TaskFilter 
        changeFilter={changeFilter}
        currentFilter={filter} 
      />}
      <div className="box">
        {error && <p>{error}</p>}
        {tasks && <TaskList tasks={tasks} />}
      </div> */}

      {/* <ul>
        {!documents && <p>No Tasks</p>}
        {documents && documents.map(doc => (
          <li
            
            key={doc.id}
            className="task-item">
            <li>
            <div className="task-cat-1">
              {(Math.floor((doc.nextDue.seconds - now)/86400))} days remaining until you need to {doc.taskName}
            </div>
            </li>
            
          </li>
        ))}
      </ul> */}
    </div>
  )
}