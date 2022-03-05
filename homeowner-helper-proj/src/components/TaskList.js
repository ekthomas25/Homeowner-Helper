import React, { useContext } from 'react';
import TaskDetail from './TaskDetail';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div className="task-list">
      <ul>
        {tasks.map(task => {
          return( <TaskDetail task={task} key={task.id} />)
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :D</div>
  );
}

export default TaskList;