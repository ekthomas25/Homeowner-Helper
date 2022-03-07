import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
// import TaskControl from './TaskControl';
// import TaskList from './TaskList';
// import TaskContextProvider from '../context/TaskContext';

// pages and components
import Home from '../pages/home/Home'
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import Navbar from './Navbar';


function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              { user && <Home />}
            </Route>
            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
