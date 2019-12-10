import React, { Component } from 'react'
import data from './StudentData/StudentInfo.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function serachingFor(term)
{
    return function(x){
        if(x.Sid == term)
        {
            return x;
        }
        else{
            return !term;
        }
    }
}

export class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term: ""
        }
        this.searchHandler = this.searchHandler.bind(this)
    }
    

    searchHandler = (event) => {
        this.setState({term: event.target.value})
    }
    render() {
        return (
            <div>
            
            <br/><br/>
            <div>
                <font color="red">
                <b>NOTE : </b> 
                <strong>Here the students can see the details of his/her account</strong>
                </font>
            </div>
            <br/><br/><br/>
            
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon="search" /></span>
                    </div>
                    <input type="text" 
                           name="sid" 
                           placeholder="Enter your SID"
                           value={this.state.term}
                           onChange={this.searchHandler} />
                </div>
                <br />
            </form>
            <div className="table table-striped">
                <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th></th>
                    <th>SID</th>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>ISBN No.(Borrowed)</th>
                    <th>Issued_Date</th>
                    <th>Returned_Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        data.filter(serachingFor(this.state.term)).map((Studentdata,key) => {
                            return( 
                                <tr key={Studentdata.id}>
                                    <td></td>
                                    <td>{Studentdata.Sid}</td>
                                    <td> {Studentdata.Fname}</td>
                                    <td> {Studentdata.Lname}</td>
                                    <td>{Studentdata.ISBN}</td>
                                    <td> {Studentdata.Issued_date}</td>
                                    <td> {Studentdata.returned_date}</td>
                                </tr>
                                )      
                            })
                    } 
                    
                </tbody>
                </table>
            </div>
            
        </div>
        )
    }
}

export default Student
