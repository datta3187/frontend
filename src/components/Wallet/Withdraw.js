import React, { Component }  from 'react';
import {Grid, Input, Button, Dropdown} from 'semantic-ui-react';
import {toMinFixed} from "../../utils";

class Withdraw extends Component {
    onClick = () => this.props.onClick();

    onChange = field => e => {
        if (field === 'amount' && !/^(\s*|\d+)$/.test(e.target.value.trim())) {
            return null;
        }
        this.props.onChange(field, e.target.value.trim());
    };

    render() {
        const { currency, rid, amount, otp, submitting } = this.props;

        return (
            <Grid>
                <Grid columns={3} relaxed='very'>
                    <Grid.Column>
                        <p>
                            {currency['name']}
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>
                            LOCKED <br/>
                            {toMinFixed(currency['locked'], 2)}
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>
                            BALANCE <br/>
                            {toMinFixed(currency['balance'], 2)}
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={3} relaxed='very'>
                    <h3>Withdraw Amount</h3>
                    <Grid item xs={12} sm={5} >
                        <Input
                            label={`${currency.name} withdrawal address`}
                            onChange={this.onChange('rid')}
                            value={rid}
                        />
                        <Input
                            placeholder="Withdrawal amount"
                            onChange={this.onChange('amount')}
                            value={amount}
                        />
                        <Input
                            placeholder="OTP code"
                            onChange={this.onChange('otp')}
                            value={otp}
                        />
                        <p >
                            <span style={{width: '50%', display: 'inline-block'}}>Fee</span>
                            <span style={{textAlign: 'right', width: '50%', display: 'inline-block'}}>{`${currency.withdraw_fee} ${currency.id.toUpperCase()}`}
                            </span>
                        </p>
                        <p>
                            <span style={{width: '50%', display: 'inline-block'}}>Total Withdraw Amount</span>
                            <span style={{textAlign: 'right', width: '50%', display: 'inline-block'}}>
                                {`${currency.withdraw_fee + +amount} ${currency.id.toUpperCase()}`}
                            </span>
                        </p>
                        <Button
                            disabled={!rid || !amount || !otp || submitting}
                            onClick={this.onClick}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Withdraw;
