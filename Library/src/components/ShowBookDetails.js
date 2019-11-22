import React, { Component } from 'react'
import data from '../BookData/BookDetails.json'

 class ShowBookDetails extends Component {
    render() {
        return (
            <div class="table table-hover">
            <table class='table'>
              <thead class="thead-dark">
                <tr>
                  <th></th>
                  <th>Isbn</th>
                  <th>Bookname</th>
                  <th>Authorname</th>
                  <th>No of Copies</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
              {
                        data.map((bookdata,key) => {
                            return( 
                                <tr key={bookdata.isbn}>
                                    <td></td>
                                    <td>{bookdata.isbn}</td>
                                    <td> {bookdata.bookname}</td>
                                    <td> {bookdata.authorname}</td>
                                    <td>{bookdata.copy}</td>
                                   <td><button></button></td>
                                </tr>
                                )      
                            })
                    } 
              </tbody>
            </table>
            </div>
        )
    }
}

export default ShowBookDetails

