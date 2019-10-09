import React, { Component }  from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';


class Withdraw extends Component {
    onClick = () => this.props.onClick();

    onChange = field => e => {
        debugger
        if (field === 'amount' && !/^(\s*|\d+)$/.test(e.target.value.trim())) {
            return null;
        }
        this.props.onChange(field, e.target.value.trim());
    };

    render() {
        const { currency, rid, amount, otp, submitting } = this.props;
        debugger

        return (
            <Grid columns={3} relaxed='very'>
                <Grid item xs={12} sm={5} >
                    <Input
                        label={`${currency.name} withdrawal address`}
                        onChange={this.onChange('rid')}
                        value={rid}
                    />
                    <Input
                        label="Withdrawal amount"
                        onChange={this.onChange('amount')}
                        value={amount}
                    />
                    <Input
                        label="OTP code"
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
        );
    }
}

export default Withdraw;
