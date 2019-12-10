import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import booklist from './booklist/BookList.json'
import './ShowBookDetails.css'
import 'antd/dist/antd.css';


//searching funtion
function searchingFor(term){
  return function(x){
    if(x.isbn==term)
    {
      console.log(x)
      return x
    }
    else{
      return !term
    }

    //Searching by bookname
    // return x.bookname.toLowerCase().includes(term.toLowerCase()) || !term;
    
  }
}

 class ShowBookDetails extends Component {

  constructor(props) {
    super(props)
    
    this.isbn=React.createRef();
    this.bookname=React.createRef();
    this.authorname=React.createRef();
    this.copy=React.createRef();
    this.state={
      id: "",
      isbn: "",
      bookname: "",
      authorname: "",
      copy: "",
      editing: true,  //This is using for set submit button false while we are updating
      booklist: booklist, 
      term: "", //This is using for seaching
      bookId: "", //This is an itermediate state to store the id for updating
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

     

  //add Operation
  submitHnadler = (event) => {
  event.preventDefault();
  let ArrList =[];
  ArrList=booklist;  
  booklist.push({
              id : Math.random(),
              isbn : this.isbn.current.value,
              bookname : this.bookname.current.value,
              authorname : this.authorname.current.value,
              copy : this.copy.current.value,
              });
  sessionStorage.setItem('data',JSON.stringify(booklist));
  this.setState({booklist: ArrList});

  
  }


  //This funstion is using to set the submit button false and update button true
  renderEditForm = () => {
    if (!this.state.editing) {
      return <div className="cancelSubmitButton"><form onSubmit={this.updateHandler}>
                  <br />
                  <button>Update</button>
                  <button onClick={() => this.setEdit()}>cancel</button>
                
            </form></div>
    }
  }

  //After clicking on the edit button this will set the corresponding fields
  editHandle = (id) =>{
    this.bookId=id;
    console.log(id);
    let newArr=booklist.filter(product => product.id===id);
    console.log( newArr[0].bookname)
    this.setState({ isbn: newArr[0].isbn,
                    bookname: newArr[0].bookname,
                    authorname: newArr[0].authorname,
                    copy: newArr[0].copy,
                    editing: false
                  })
  }

  //After edit update operation
  updateHandler = (event) =>{
    event.preventDefault(); 
    console.log(this.bookId)
    let indexObj = this.state.booklist.findIndex(book => book.id === this.bookId)
    console.log(indexObj)
    let updateObj = { ...this.state.booklist[indexObj] , 
                      isbn: this.isbn.current.value ,
                      bookname: this.bookname.current.value , 
                      authorname: this.authorname.current.value , 
                      copy: this.copy.current.value
                    }
    console.log(updateObj)
    let finalObj = {
      ...this.state.booklist.splice(indexObj,1,updateObj) 
      
    }
    finalObj=this.state.booklist;
    this.setState({booklist: finalObj})

  }
  
  
  //Delete Operation
  deleteHandle = (id) => {
      console.log(id) 
      let del=this.state.booklist.filter(product => product.id !== id);
      this.setState({ booklist: del })
  }

  //search handler
  searchHandler (event){
    this.setState({term: event.target.value})
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

          {/* This is for giving right click functionalities */}
          {/* <div> 
                <ContextMenuTrigger id="some_unique_identifier">
                  <div className="well">Right click to see the menu</div>
                </ContextMenuTrigger>

                <ContextMenu id="some_unique_identifier">
                  <MenuItem>
                    ContextMenu Item 1
                  </MenuItem>
                  <MenuItem>
                    ContextMenu Item 2
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem>
                    ContextMenu Item 3
                  </MenuItem>
                </ContextMenu>

              </div> */}

        <div className="error-actions">
        <Link to="/admin" className="btn btn-outline-dark">
            <FontAwesomeIcon icon="sign-out-alt"/>
            &nbsp;logout
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
                  <button type="submit">submit</button>
                </React.Fragment>
              ):(
                <React.Fragment>     
                  
                </React.Fragment>
              )
            }    
          </React.Fragment>  
          <br />     
          </form>
        </div>
        {this.renderEditForm()}
        <br /><br /><br />


        {/* Searching */}
        <div className="input-group">
          <div className="input-group-prepend">
              <span className="input-group-text"><FontAwesomeIcon icon="search" /></span>
          </div>
            <input type="text" 
                    name="isbn" 
                    placeholder="Enter Isbn"
                    value={this.state.term}
                    onChange={this.searchHandler} />
    `       </div>
        <br />

          <div className="table table-striped">
          <table className='table'>
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>ISBN &nbsp;&nbsp;</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>No of Copies</th>
                <th>&nbsp;&nbsp;&nbsp;Operations</th>
              </tr>
            </thead>
            <tbody>
            {
              
              this.state.booklist.filter(searchingFor(this.state.term)).map((book) => {
                  return( 
                      <tr key={book.id}>
                          <td>{book.id}</td>
                          <td>{book.isbn}</td>
                          <td> {book.bookname}</td>
                          <td> {book.authorname}</td>
                          <td>{book.copy}</td>
                          <td>
                            
                            <a  onClick={()=>this.editHandle(book.id)} style={{fontSize : 15 , color : "black" }}>Edit</a>|
                            <a  onClick={()=>this.deleteHandle(book.id)} style={{fontSize : 15 , color : "black" }}>Delete</a>
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

