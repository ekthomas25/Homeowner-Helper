import React, { useState } from 'react';
import TaskList from '../../components/TaskList';

import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

//styles
import './Home.css'
import TaskFilter from './TaskFilter';

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('tasks')
  const [filter, setFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const tasks = documents ? documents.filter(document => {
    switch (filter) {
      case 'all':
        return true
      case 'Interior':
      case 'Exterior':
      case 'Appliances':
      case 'Electrical':
      case 'Plumbing':
      case 'HVAC':
      case 'Roof':
      case 'Walkways':
      case 'Windows':
      case 'Doors':
        return document.area === filter
      default:
        return true
    }
  }) : null

  return (
    <div className="home">
      <h1>Home</h1>
      {documents && <TaskFilter 
        changeFilter={changeFilter}
        currentFilter={filter} 
      />}
      <div className="box">
        {error && <p>{error}</p>}
        {tasks && <TaskList tasks={tasks} />}
      </div>
    </div>
  )
}