import React from 'react'
import data from '../StudentData/StudentInfo.json'

function Student() {
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
                        data.map((Studentdata,key) => {
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
            {/* <h2>Student</h2>
            {data.map((Studentdata,key) => {
                return <h1 key={Studentdata.id}>{Studentdata.Fname}</h1>
            })} */}
        </div>
    )
}

export default Student