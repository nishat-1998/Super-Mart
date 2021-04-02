import React,{createContext,useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import Orders from './components/Orders/Orders';
import AddProducts from './components/AddProducts/AddProducts';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
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
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
            <AddProducts/>
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
