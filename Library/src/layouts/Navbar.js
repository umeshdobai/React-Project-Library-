import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowBookDetails from '../components/ShowBookDetails';

function Navbar() {
  var logout=false;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/"><font size="">Home</font>&nbsp;<FontAwesomeIcon icon="home"/>
        <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/student">Student</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/admin">Admin</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white text-uppercase ml-5" to="/contact">Contact Us&nbsp;<FontAwesomeIcon icon="envelope"/></Link>
      </li>
      
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />   
        <button   class="btn btn-primary" type="submit">Login</button>
           
  </form> */}
  {
              logout ? (
                <React.Fragment>
                 <button   className="btn btn-success" type="submit">logout</button>
                </React.Fragment>
              ):(
                <React.Fragment>  
                     
                </React.Fragment>
              )
            }
  
  </div>
</nav>
  );
}
                                                                                                                                  
export default Navbar;