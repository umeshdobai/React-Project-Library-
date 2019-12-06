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
import ShowBookDetails from './components/ShowBookDetails'


//Font-awesome..........
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome , faEnvelope , faArrowLeft ,faFilter} from '@fortawesome/free-solid-svg-icons';
import Footer from './layouts/Footer';
import Test from './components/Test';


library.add(faHome,faEnvelope,faArrowLeft,faFilter);




function App() {
  return (
    <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/student" component={Student}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/contact" component={ContactUs}/>
          <Route path="/showbookdetails" component={ShowBookDetails} />
          <Route path="/showbookdetails" component={ShowBookDetails} />
          <Route path="/test" component={Test} />
          <Route component={NotFoundpage}/>
        </Switch>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
