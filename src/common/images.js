import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
class Images extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagec : ''
        }
    }
    render() {
        return (
            <div>
                 <Image src = {this.props.imagec} />
            </div>
        )
    }
}

export default Images;