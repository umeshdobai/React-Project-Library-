import React from 'react'
import './AdminStyle.css'
import {Redirect} from 'react-router'


const initialState = {
    username:"",
    password:"",
    usernameError: "",
    passwordError: ""
}
class  Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = event =>{
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        const isValid=this.validate();
        if(isValid){
            console.log(this.state)

            //clear form
            this.setState(initialState);
            //Redirection
            this.props.history.push('/showbookdetails')
        }
    }

    validate = () =>{
        const { username, password } = this.state;
            let usernameError = "";
            let passwordError = "";

            if(!this.state.username.includes('@')){
                usernameError = "Invalid username"
            }
            if(this.state.password.length<=5){
                passwordError = "Password length must be of 6"
            }
            if(usernameError || passwordError){
                this.setState({usernameError,passwordError});
                return false;
            }
            
            return true;
    }
    
    render(){
        const {username,password}=this.state
    return (
        
        <div className="login-form">
        <form onSubmit={this.handleSubmit}>     
        
         <h2 className="text-center">Login</h2>
          <div className="input-group mb-3">
            <div className="input-group-append">
				<span className="input-group-text"><i className="fa fa-user"></i></span>
			</div>
            <input type="text" required  
                    className="form-control"
                    value={username}
                    onChange={this.handleUsernameChange}
                    placeholder="eg : username@gmail.com"  autoFocus/> <font color="red">*</font>
                    
                
          </div>

          <div style={{fontSize : 15 , color : "red" , textAlign : "center" , fontWeight : "bold"}}>{this.state.usernameError}</div>

          <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span>
            </div>
            <input type="password" required
                    className="form-control"
                    value={password}
                    onChange={this.handlePasswordChange}
                    placeholder="Enter Password"  /> <font color="red">*</font>
                    
          </div>

          <div style={{fontSize : 15 , color : "red" , textAlign : "center" , fontWeight : "bold"}}>{this.state.passwordError}</div>
                          
            <div className="form-group">
                
                    <button className="btn btn-primary btn-block" type="submit">
                    Submit
                    </button>
                
            </div>
            <div style={{fontSize : 15 , color : "red" , textAlign : "center" }}>* mark fields are required</div>
        </form>
        </div>
    )
    }
}
    
export default Admin
