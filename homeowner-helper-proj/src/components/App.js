import React from 'react';
import TaskControl from './TaskControl';
import TaskList from './TaskList';
import TaskContextProvider from '../contexts/TaskContext';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
