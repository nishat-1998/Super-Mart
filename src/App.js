import React,{createContext,useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddEvents from './components/AddEvents/AddEvents';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name:{loggedInUser.name}</p>
    <Router>
      <Header/> 
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/order/:name">
              <Order/>
            </PrivateRoute>
          <PrivateRoute path="/addEvents">
            <AddEvents />
          </PrivateRoute>
          <Route path="/dashboard">
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
