import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'
class Checkboxx extends Component {
    constructor(props){
        super(props);
        this.state = {
            desc : ''
        }
    }
    render() {
        return (
            <div>
                <Checkbox />
            </div>
        )
    }
}
export default Checkboxx