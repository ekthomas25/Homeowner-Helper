import React, { createContext, useState } from 'react';
import useCollection from '../hooks/useCollection'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const { documents } = useCollection('tasks')
  const [tasks, setTasks] = useState([
    {taskName: 'Mow the lawn', area: 'Exterior', frequency: 'Bi-monthly', about: 'blah blah', nextDue: '2/4/22', materialList: 'pizza', id: 1},
    {taskName: 'Clean the gutters', area: 'Exterior', frequency: 'Yearly', about: 'Do not stand near the edge of the roof without...', nextDue: '2/14/22', materialList: 'yard debris bags', id: 2},
  ]);
  const addTask = (taskName, area, frequency, about, nextDue, materialList) => {
    setTasks([...tasks, {taskName, area, frequency, about, nextDue, materialList, id: v4()}]);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const selectTask = (id) => {
    setTasks(tasks.filter(task => task.id === id));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, selectTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;