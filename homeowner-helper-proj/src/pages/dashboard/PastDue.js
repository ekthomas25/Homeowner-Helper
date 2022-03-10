import React, { useState } from 'react';
import { timestamp } from '../../firebase/config'

import { useCollection } from '../../hooks/useCollection'

//styles

export default function PastDue() {
  const { documents, error } = useCollection('tasks', ["nextDue", "<", timestamp.fromDate(new Date())])
  
  const now = Date.now()/1000
  
  return (
    <div className="past-due">
      <h2>Overdue Tasks:</h2>
      {error && <p>{error}</p>}
      <ul>
        {documents < 1 && (<p>You're caught up!</p>)}
        {documents && documents.map(doc => (
          <li
            key={doc.id}
            className="overdue-item">
            {doc.taskName}: &nbsp; {(Math.floor((now -doc.nextDue.seconds)/86400))} days overdue
          </li>
        ))}
      </ul>
    </div>
  )
}