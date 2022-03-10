import React, { useState } from 'react';

import { useCollection } from '../../hooks/useCollection'

//styles

export default function Dashboard() {
  const { documents, error } = useCollection('tasks')

  console.log(new Date().toDateString())

  return (
    <div className="home">
      <h2>Today's Date: {new Date().toDateString()}</h2>
      {/* <h1>Your Tasks:</h1>
      {documents && <TaskFilter 
        changeFilter={changeFilter}
        currentFilter={filter} 
      />}
      <div className="box">
        {error && <p>{error}</p>}
        {tasks && <TaskList tasks={tasks} />}
      </div> */}
    </div>
  )
}