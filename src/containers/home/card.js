import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
class HomeCard extends Component {
    render() {
        return (
            <div>
                <Card.Group>
                    <Card>
                    <Card.Content> 
                        <Card.Header>
                        <div className= 'coin_name'>EXTO/USDC</div>
                        <div className= 'coin_growth'>0.00%</div>
                        </Card.Header>
                        <Card.Header>4.750001</Card.Header>
                        <Card.Description>
                        Volume: 184,270,650.0025468
                        </Card.Description>
                    </Card.Content> 
                    </Card> 
                </Card.Group>
            </div>
        )
    }
}

export default  HomeCard;