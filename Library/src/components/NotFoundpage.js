import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class NotFoundpage extends Component {
    render() {
        return (
           
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>Error 404 Not Found</h2>
              <div className="error-details">
                Sorry, an error occurred. The requested page was not found!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                    <FontAwesomeIcon icon="home"/>
                    &nbsp;Back To Main
                </Link>
                <Link className="btn btn-outline-secondary btn-lg">
                     <FontAwesomeIcon icon="envelope"/>
                        &nbsp;Support
                </Link>
              </div>
            </div>
          </div>
        </div>
  
        )
    }
}

export default NotFoundpage

