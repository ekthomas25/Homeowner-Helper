import React from 'react';
import { Link } from 'react-router-dom';
import LogDetail from '../pages/task/LogDetail';

export default function LogList({ task }) {
  return (
    <>
    <ul>
      {task.logs.length > 0 && task.logs.map(log => <Link 
      to={`/${log.id}`} 
      key={log.id}>
        {log.completionDate.toDate().toDateString()}</Link>)}
    </ul>
    {/* <LogDetail /> */}
    </>
  )
}