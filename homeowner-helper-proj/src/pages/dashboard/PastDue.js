import React, { useState } from 'react';
import { timestamp } from '../../firebase/config'

import { useCollection } from '../../hooks/useCollection'

//styles

export default function PastDue() {
  const { documents, error } = useCollection('tasks', ["nextDue", "<", timestamp.fromDate(new Date())])
  
  console.log({documents})
  console.log(Date.now()/1000)
  console.log(timestamp.fromDate(new Date()).seconds)
  const now = Date.now()/1000
  
  return (
    <div className="past-due">
      <h2>Overdue Tasks:</h2>
      {error && <p>{error}</p>}
      <ul>
        {documents < 1 && (<li>You're caught up!</li>)}
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
      </ul>
    </div>
  )
}