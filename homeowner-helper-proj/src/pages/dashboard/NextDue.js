import React, { useState } from 'react';
import { timestamp } from '../../firebase/config'

import { useCollection } from '../../hooks/useCollection'

//styles
let twoWeeks = (Date.now()/1000) + 1209600
export default function NextDue() {
  const { documents, error } = useCollection('tasks', ["nextDue", ">", timestamp.fromDate(new Date())], ["nextDue", "<", timestamp.fromDate(new Date('March 30, 2022 03:24:00'))])
  
  // console.log({documents})
  // console.log(Date.now()/1000)
  console.log(timestamp.fromDate(new Date()))
  const now = Date.now()/1000
  const twoWeeks = now + 1209600
  // console.log(((Date.now()/1000)+1209600)/86400)
  // console.log(twoWeeks/86400)
  console.log((timestamp.fromDate(new Date())+(Date.now()/1000) + 1209600))
  return (
    <div className="past-due">
      <h2>Upcoming Tasks:</h2>
      {error && <p>{error}</p>}
      <ul>
        {documents < 1 && (<p>No upcoming projects</p>)}
        {documents && documents.map(doc => (
          <li
            key={doc.id}
            className="next-item">
            {doc.taskName}: &nbsp; due in {(Math.floor((doc.nextDue.seconds - now)/86400))} days
          </li>
        ))}
      </ul>
    </div>
  )
}