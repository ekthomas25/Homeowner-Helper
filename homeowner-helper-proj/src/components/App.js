import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
// import TaskControl from './TaskControl';
// import TaskList from './TaskList';
// import TaskContextProvider from '../context/TaskContext';

// pages and components
// import Home from '../pages/home/Home'
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Navbar from './Navbar';


function App() {
  const { authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
