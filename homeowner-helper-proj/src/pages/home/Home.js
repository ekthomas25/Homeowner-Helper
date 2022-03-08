import React from 'react';
import TaskForm from './TaskForm';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('tasks')
  return (
    <>
      <h1>Home</h1>
      <TaskForm uid={user.uid} />
    </>
  )
}