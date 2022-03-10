import React from 'react';

export default function Cost({tasks}) {

  return (
    <div>
      <ul>
        {tasks < 1 && (<p>No upcoming projects</p>)}
        {tasks && tasks.map(doc => (
          <li
            key={doc.id}
            className="next-item">
            {doc.taskName}
            {doc.logs.reduce((prevValue, currValue) => {
                return prevValue.cost + currValue.cost
              }, 0)}
            {/* {doc.logs.map(log => (
              <li
                key={log.id}
              >
                {log.cost}
              </li>
            ))} */}
          </li>
        ))}
      </ul>
    </div>
  )
}