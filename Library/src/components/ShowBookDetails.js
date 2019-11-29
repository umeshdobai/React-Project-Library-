import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShowBookDetails.css'

 class ShowBookDetails extends Component {

  constructor(props) {
    super(props)
    
    this.isbn=React.createRef();
    this.bookname=React.createRef();
    this.authorname=React.createRef();
    this.copy=React.createRef();
}
state={
        id: "",
        isbn: "",
        bookname: "",
        authorname: "",
        copy: "",
        editing: true,
      todolist:[
        {
        id: 1,
        isbn: 1041287114100,
        bookname: "Data Structure",
        authorname: "Karumachi",
        copy: 500
        
        },
        {
            id: 2,
            isbn: 1041287114101,
            bookname: "Algorithm",
            authorname: "Coreman",
            copy: 500
            
        },
        {
            id: 3,
            isbn: 1041287114102,
            bookname: "TOC",
            authorname: "Sipser",
            copy: 500
            
        },
        {
            id: 4,
            isbn: 1041287114103,
            bookname: "Compiler",
            authorname: "Ulffman Ahoou",
            copy: 500
            
        },
        {
            id: 5,
            isbn: 1041287114104,
            bookname: "Digital Electronics",
            authorname: "Morish manno",
            copy: 500
            
        },
        {
          id: 6,
          isbn: 1041287114105,
          bookname: "Computer Network",
          authorname: "Forouzzen",
          copy: 500
          
        },
        {
          id: 7,
          isbn: 1041287114106,
          bookname: "Operating System",
          authorname: "Galvin",
          copy: 500
          
        },
        {
          id: 8,
          isbn: 1041287114107,
          bookname: "Database",
          authorname: "Navathe",
          copy: 500
          
        }
      ]
}

  submitHnadler = (event) => {
  event.preventDefault();
  console.log(this.isbn.current.value);
  let ArrList =[];
  ArrList=this.state.todolist;
  this.state.todolist.push({
              id : Math.random(),
              isbn : this.isbn.current.value,
              bookname : this.bookname.current.value,
              authorname : this.authorname.current.value,
              copy : this.copy.current.value,
              });
  sessionStorage.setItem('data',JSON.stringify(this.state.todolist));
  this.setState({todolist: ArrList});
  
  //After editing submiting the value
  
  }


  //Edit Operation
  editHandle = (id) =>{
      console.log(id);
      let newArr=this.state.todolist.filter(product => product.id===id);
      console.log( newArr[0].bookname)
      this.setState({ isbn: newArr[0].isbn,
                      bookname: newArr[0].bookname,
                      authorname: newArr[0].authorname,
                      copy: newArr[0].copy,
                      editing: false
                    })
  }


  //Delete Operation
  deleteHandle = (id) => {
    console.log(id)
      let del =this.state.todolist.filter(product => product.id !== id);
      this.setState({todolist:del})
  }

  handleIsbnChange = (event) => {
      this.setState({
        isbn: event.target.value
      })
  }

  handleBooknameChange = (event) => {
    this.setState({
      bookname: event.target.value
    })
  }

  handleAuthornameChange = (event) => {
    this.setState({
      authorname: event.target.value
    })
  }

  handleCopyChange = (event) => {
    this.setState({
      copy: event.target.value
    })
  }
  setEdit(){
    this.setState({
      
      editing: true,
      isbn: "",
      bookname: "",
      authorname: "",
      copy: ""
    })
  }


    render() {
        return (
          <React.Fragment>
            
          
          <div className="error-actions">
          <Link to="/admin" className="btn btn-outline-primary btn-lg">
              <FontAwesomeIcon icon="arrow-left"/>
              &nbsp;Back
          </Link>
          </div>
          <br /><br />
          <div >
            <form onSubmit={this.submitHnadler}>
            <input className="addbookform" 
                  type="number" 
                  placeholder="Isbn no." 
                  value={this.state.isbn} 
                  ref={this.isbn}  
                  onChange={this.handleIsbnChange}/>&nbsp;

            <input type="text" 
                  placeholder="Book name" 
                  value={this.state.bookname} 
                  ref={this.bookname} 
                  onChange={this.handleBooknameChange}/>&nbsp;

            <input type="text" 
                  placeholder="Author name" 
                  value={this.state.authorname} 
                  ref={this.authorname} 
                  onChange={this.handleAuthornameChange}/>&nbsp;

            <input type="number" 
                  placeholder="No of copy" 
                  value={this.state.copy} 
                  ref={this.copy} 
                  onChange={this.handleCopyChange}/>&nbsp;
            <React.Fragment>
              {
                this.state.editing ? (
                  <React.Fragment>
                    <button className="btn btn-primary">submit</button>
                  </React.Fragment>
                ):(
                  <React.Fragment>
                    <button className="btn btn-primary">update</button>&nbsp;
                    <button className="btn btn-info" onClick={() => this.setEdit()}>cancel</button>
                  </React.Fragment>
                )}
            </React.Fragment>     
            
            </form>
          </div>
          <br /><br />
            <div className="table table-striped">
            <table className='table'>
              <thead className="thead-dark">
                <tr>
                  <th></th>
                  <th>ISBN</th>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>No of Copies</th>
                  <th>&nbsp;&nbsp;&nbsp;Operations</th>
                </tr>
              </thead>
              <tbody>
              {
                
                        this.state.todolist.map((todo) => {
                            return( 
                                <tr key={todo.id}>
                                    <td></td>
                                    <td>{todo.isbn}</td>
                                    <td> {todo.bookname}</td>
                                    <td> {todo.authorname}</td>
                                    <td>{todo.copy}</td>
                                   <td>
                                     
                                     <a href="#" onClick={()=>this.editHandle(todo.id)}>Edit</a>
                                     <a href="#" onClick={()=>this.deleteHandle(todo.id)}>Delete</a>
                                   </td>
                                </tr>
                                )      
                            })
                    } 
              </tbody>
            </table>
            </div>
            </React.Fragment>
        )
    }
}

export default ShowBookDetails

