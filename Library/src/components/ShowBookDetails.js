import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShowBookDetails.css'
import 'antd/dist/antd.css';


//Json Data
var booklist=
[
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
      editing: true,
      booklist: booklist, 
      term: "",
      bookId: ""
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


  //Update Opeartion
  renderEditForm = () => {
    if (!this.state.editing) {
      return <div><form onSubmit={this.updateHandler}>
                <React.Fragment>
                  <button>Update</button>
                  <button onClick={() => this.setEdit()}>cancel</button>
                </React.Fragment>
            </form></div>
    }
  }
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
      ...this.state.booklist.slice(0,indexObj) , 
      updateObj , 
      ...this.state.booklist.slice(indexObj+1)
    }
    console.log(finalObj);

  }
  
  //Edit Operation
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
                  <button type="submit">submit</button>
                </React.Fragment>
              ):(
                <React.Fragment>     
                  
                </React.Fragment>
              )}
              
          </React.Fragment>  
          <br />     
          </form>
        </div>
        {this.renderEditForm()}
        <br /><br /><br />


        {/* Searching */}
        <input type="text"
                 placeholder="search by Isbn" 
                 onChange={this.searchHandler}
                 value={this.term}/>

          <div className="table table-striped">
          <table className='table'>
            <thead className="thead-dark">
              <tr>
                <th></th>
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
                          <td></td>
                          <td>{book.isbn}</td>
                          <td> {book.bookname}</td>
                          <td> {book.authorname}</td>
                          <td>{book.copy}</td>
                          <td>
                            
                            <a href="#" onClick={()=>this.editHandle(book.id)} style={{fontSize : 15 , color : "black" }}>Edit</a>|
                            <a href="#" onClick={()=>this.deleteHandle(book.id)} style={{fontSize : 15 , color : "black" }}>Delete</a>
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

