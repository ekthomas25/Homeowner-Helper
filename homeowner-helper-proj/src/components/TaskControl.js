import React, { Component } from 'react';
import TaskList from './TaskList'

class TaskControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskFormVisible: false,
      selectedTask: null
    }
  }
  render() { 
    return (
      <div className="task-control">
        <h1>Welcome!</h1>
        <TaskList />
      </div>
    );
  }
}

export default TaskControl;
