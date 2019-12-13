import React from 'react'
import './Admin.css'
import loginlogo from '../loginlogo.png'
import admininfo from './admininfo/AdminInfo.json'


const initialState = {
    username:"",
    password:"",
    usernameError: "",
    passwordError: "",
    error: "",
    success: false
    
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
                    console.log(this.state.success)
                    this.state.success=true;
                    console.log(this.state.success)

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
            //Regex for email
            const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

            if(!expression.test(username.toLocaleLowerCase())){
                usernameError = "Invalid username"
            }
            if(password.length<=5){
                passwordError = "Password length must be of 6"
            }
            if(usernameError){
                console.log("inside usenameError")
            }
            if(passwordError){
                console.log("inside passwordError")
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
        
         <img src={loginlogo} width="100px" style={{marginLeft: "70px"}}/>
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
                    login
                    </button>
                
            </div>
            <div style={{fontSize : 15 , color : "red" , textAlign : "center" , fontWeight: "bold"}}>{this.state.error}</div>
            <div style={{fontSize : 14 , color : "red" , textAlign : "center" }}>* mandatory fields</div>
        </form>
        </div>
    )
    }
}
    
export default Admin
