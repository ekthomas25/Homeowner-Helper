import React from 'react';
import { Link } from 'react-router-dom';
import LogDetail from '../pages/task/LogDetail';

// styles
import './LogList.css'

export default function LogList({ task }) {
  return (
    <div className="log-list">
      <ul>
        {task.logs.length > 0 && task.logs.map(log => <Link 
        to={`/${log.id}`}
        key={log.id}><li>
          {log.completionDate.toDate().toDateString()}</li></Link>)}
      </ul>
      {/* <LogDetail /> */}
    </div>
  )
}