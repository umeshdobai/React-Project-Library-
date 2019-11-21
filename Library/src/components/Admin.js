import React from 'react'
import './AdminStyle.css'

function Admin() {
    return (
        <div className="login-form">
   <form >
      
        
         <h2 className="text-center">Login</h2>
          <div className="input-group mb-3">
            <div className="input-group-append">
				<span className="input-group-text"><i className="fa fa-user"></i></span>
			</div>
            <input type="text" required  
                    className="form-control"
                    placeholder="Username"  /> 
                
          </div>
          <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span>
            </div>
            <input type="password" required
                    className="form-control"
                    id="password"
                    placeholder=" Type Password"  /> 
                    
          </div>


          <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text"><i className="fa fa-key"></i></span>
            </div>
            <input type="password" required
                    className="form-control"
                    id="cnfpassword"
                    placeholder="Confirm Password"  /> 
                    
          </div>
                          
            <div className="form-group">
                
                    <button className="btn btn-primary btn-block"
                            type="submit">
                    Submit
                    </button>
                
            </div>
    </form>

</div>
    )
}

export default Admin
