import React from 'react'
import {Button, Checkbox, Form, Input} from 'semantic-ui-react'

export const AskLimit =() => {
        return (
                <Form>
                    <div>
                        <span>Sell ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;
                        <span> 100.4050 ETH</span>
                    </div>
                    <Form.Field>
                        <label>Price</label>
                        <input type="number" />
                    </Form.Field>
                    <Form.Field>
                        <label>Amount</label>
                        <input type="number" />
                    </Form.Field>

                    <Form.Field>
                        <label>Total</label>
                        <Input type="number"
                               placeholder='Total' />
                        <span style={{ color: 'red' }}> </span>
                    </Form.Field>

                    <Button type='submit' style={{color: 'white', background: '#ea0070' }}>Sell ETH</Button>
                </Form>
        )
}

export const AskMarket =() => {
    return (
            <Form>
                <div>
                    <span>Sell ETH</span> &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <span> 100.4050 ETH</span>
                </div>
                <Form.Field>
                    <label>Price</label>
                    <input type="number" />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <input type="number" />
                </Form.Field>
                <Button type='submit' style={{color: 'white', background: '#ea0070' }}>Sell ETH</Button>
            </Form>
    )
}

