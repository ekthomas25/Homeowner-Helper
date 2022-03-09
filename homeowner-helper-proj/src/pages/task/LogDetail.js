import React, { useState } from 'react';
import { timestamp } from '../../firebase/config';
import { useDocument } from '../../hooks/useDocument';
import { useParams } from 'react-router-dom';

export default function LogDetail({ task }) {
  
  console.log("hey gurl")
  // const { logs, id } = useParams();
  // const {error, document } = useDocument('tasks', id, logs);
  // console.log(document)
  // if(error) {
  //   return <div className="error">{error}</div>
  // }

  // if (!task) {
  //   return <div className="loading">loading...</div>
  // }

  console.log(document.tasks.logs)
  return  (
    <div className="log-detail">
      
      <p>{task.logs.cost}</p>
    </div>
  )
}