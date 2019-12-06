import React, { Component } from 'react'
import "./Dialog.css"



export class Dialog extends Component {
    constructor(props) {
        super(props);
    
    }
    
    render() {
        let dialog = (
        <div className="dialogStyles">
            <div className="dialogBanner">
                <button className="dialogClosedButtonStyles" onClick={this.props.onClose}>X</button>
            </div>
            <div>{this.props.children}</div>
        </div>
        );
        if(!this.props.isOpen){
            dialog=null;
        }
        return (

           <div>
               {dialog}
            </div>
        )
        
    }
}

export default Dialog
