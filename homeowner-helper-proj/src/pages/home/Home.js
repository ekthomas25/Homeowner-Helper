import React from 'react';
import TaskForm from './TaskForm';
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  return (
    <>
      <h1>Home</h1>
      <TaskForm uid={user.uid} />
    </>
  )
}