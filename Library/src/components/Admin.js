import React from 'react'
import './Admin.css'
import admininfo from './admininfo/AdminInfo.json'


const initialState = {
    username:"",
    password:"",
    usernameError: "",
    passwordError: "",
    error: "",
    success: false,
    
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
        if(isValid)
        {
        
            admininfo.map((admindata,key) => {
                if(this.state.username === admindata.username && this.state.password === admindata.password){
                    this.setState({success: true})

                    //clear form
                    this.setState(initialState);
                    
                    //Redirection
                    this.props.history.push('/showbookdetails')
                }
                else
                {
                    this.setState(initialState);
                    this.setState({error: "Inavlid credentials"})
                }
            })
        }
    }

    validate = () =>{
        const { username, password } = this.state;
            let usernameError = "";
            let passwordError = "";

            if(!username.includes('@' && '.com')){
                usernameError = "Invalid username"
            }
            if(password.length<=5){
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
                
                    <button className="btn btn-primary btn-block" 
                    type="submit"
                    disabled={this.state.success}>
                    Submit
                    </button>
                
            </div>
            <div style={{fontSize : 15 , color : "red" , textAlign : "center" , fontWeight: "bold"}}>{this.state.error}</div>
            <div style={{fontSize : 15 , color : "red" , textAlign : "center" }}>* mark fields are required</div>
        </form>
        </div>
    )
    }
}
    
export default Admin
