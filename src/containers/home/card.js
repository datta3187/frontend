import React, { Component } from 'react'
import { Button, Card, Image, Input, Checkbox } from 'semantic-ui-react'
import Textboxx from '../../common/textboxx';
import Buttonn from '../../common/buttonn'
import Checkboxx from '../../common/checkbox'
class HomeCard extends Component {
    constructor(props){
        super(props);
        this.state={
            heading:'',
            description:''
        }
    }
    render() {
        return (
            <div>
                <Card.Group>
                    <Card>
                    <Card.Content> 
                    <Card.Header>
                        {this.props.heading} REGISTER WITH TRADENCE
                    </Card.Header>
                    <Card.Description>
                        {this.props.description} Trusted by millionsof people across the globe
                    </Card.Description>
                    <Textboxx placeholder='Name'></Textboxx>
                    <Textboxx placeholder='Email'></Textboxx>
                    <Textboxx placeholder='Password'></Textboxx>
                    <Textboxx placeholder='Refferal ID'></Textboxx>
                    <Checkbox label='I agree to tradences terms of use' />
                    <Buttonn buttons='REGISTER'></Buttonn>
                        {/* <Card.Header>
                        <div className= 'coin_name'>EXTO/USDC</div>
                        <div className= 'coin_growth'>0.00%</div>
                        </Card.Header>
                        <Card.Header>4.750001</Card.Header>
                        <Card.Description>
                        Volume: 184,270,650.0025468
                        </Card.Description> */}
                    </Card.Content> 
                    </Card> 
                </Card.Group>
            </div>
        )
    }
}

export default  HomeCard;