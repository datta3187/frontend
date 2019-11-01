import React, { Component } from "react";
import { Button, Modal, Grid, Label, Icon, List } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from 'qrcode.react';
import {connect} from "react-redux";
import config from '../../../config';
import './referral.scss';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

class ShareReferral extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.passModalOpen,
            copied: false
        }
    }

    render() {
        const referralLink  = config.domainUrl+'/Register?refId='+this.props.referralId;
        return (
            <div>
                <Modal size="small" open={this.props.passModalOpen} className="copymodel" >
                    <a className="mClose" onClick={this.props.closeModal}><i aria-hidden="true" className="close link icon"></i></a>
                    <Modal.Content>
                        <Grid>
                            <Grid.Row>
                            <Grid.Column mobile={16} tablet={5} computer={4}>
                                <div className="Qr_block">
                                    {referralLink && <QRCode fgColor="#333333" size={200} value={referralLink} />}
                                    {/*<Image src={`${require('../../../images/QR-code-300x3001.png')}`} size='small' />*/}
                                </div>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={11} computer={12} className="sharedata">
                                <Label as='a'>
                                    My Referral ID
                                    <Label.Detail>EX659238</Label.Detail>
                                </Label><br />
                                <Label className="label_ref">Referral Link:</Label><br />
                                <div className="inputouter">
                                    { referralLink || 'Not found'}
                                    <CopyToClipboard text={referralLink} onCopy={() => this.setState({copied: true})}>
                                        <Button disabled={!referralLink}>
                                            Copy <Icon name='copy outline' />
                                        </Button>
                                    </CopyToClipboard>
                                </div>
                                {this.state.copied ? <span style={{color: 'red'}}>Copied!</span> : null}
                                <br />
                                <List horizontal className="socicon">
                                    <List.Item><FacebookShareButton url={referralLink} ><Icon name='facebook' className="facebook_icon"  size='large' /></FacebookShareButton></List.Item>
                                    <List.Item><TwitterShareButton url={referralLink} ><Icon name='twitter ' className="twitter_icon"  size='large' /></TwitterShareButton></List.Item>
                                    <List.Item> <LinkedinShareButton url={referralLink} ><Icon name='linkedin' className="linkdin_icon"  size='large' /></LinkedinShareButton></List.Item>
                                </List>

                            </Grid.Column>
                             </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </ div>
        )
    }
}

function mapStateToProps(state) {
    return {
        referralId: state.user.data.uid
    };
}

export default connect(
    mapStateToProps,
    null)(ShareReferral);
