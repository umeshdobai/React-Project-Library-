import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

//React router
import { Switch, Route } from 'react-router-dom';
import Student from './components/Student';
import Admin from './components/Admin';
import ContactUs from './components/ContactUs';
import NotFoundpage from './components/NotFoundpage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);




function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/student" component={Student}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/not" component={NotFoundpage}/>
        </Switch>
    </div>
  );
}

export default App;
