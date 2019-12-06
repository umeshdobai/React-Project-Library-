import React, { Component } from 'react'

class EditBookDetails extends Component {

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
          
        }
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
    render() {
        return (
            <React.Fragment>
                
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
          
                  <button type="submit" onClick={()=> this.UpdateHandler()}>update</button>&nbsp;
                  <button onClick={() => this.setEdit()}>cancel</button>
               
          <br />   
           
          </form>
        </div>
    
           
            </React.Fragment>
        )
    }
}

export default EditBookDetails
