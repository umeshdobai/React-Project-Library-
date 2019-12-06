import React, { Component } from 'react'
import Dialog from './Dialog'

export class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen: false
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={(e) => this.setState({isOpen: true})}>Open dialog</button>
            <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
            A combo box is a commonly used graphical user interface widget. Traditionally, it is a combination of a drop-down list or list box and a single-line editable textbox, 
            </Dialog>
          </div>
        )
    }
}

export default Test
