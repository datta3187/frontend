import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class Teammember extends Component {
    constructor(props){
        super(props);
        this.state={
            imag:'',
            post:'',
            name:''
        }
    }
    render() {
        return (
            <div>

            <div className='teamMemberImage'>
                <Image src= {this.props.imag} />
            </div>
            <div className='teamMemberPost'>
                <h2>{this.props.post}</h2>
                <p>{this.props.name}</p>
            </div>

            </div>
        )
    }
}
export default Teammember;