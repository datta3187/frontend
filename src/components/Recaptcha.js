import React, {Component} from 'react';
import config from "../config";
import ReCAPTCHA from "react-google-recaptcha";

export default class Recaptcha extends Component {
    render() {
        return (
            <div>
                {(config.captchaPolicy != 'disabled') && (
                    <ReCAPTCHA
                        sitekey={config.recatpchaSiteKey}
                        onChange={this.props.handler}
                    />
                )}
            </div>


        )
    }
}