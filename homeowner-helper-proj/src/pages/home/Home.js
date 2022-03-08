import React from 'react';
import TaskList from '../../components/TaskList';

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Home.css'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('tasks')
  return (
    <div className="home">
      <h1>Home</h1>
      {error && <p>{error}</p>}
      {documents && <TaskList tasks={documents} />}
    </div>
  )
}