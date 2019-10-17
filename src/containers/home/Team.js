import React, {Component} from "react";
import { Grid } from 'semantic-ui-react';
import Teammember from '../../common/teammember';


export default class Team extends  Component {
    render(){
        return(
            <div className='team comn-section'>
                <div className="container">
                    <h2 className='teamheading'>TEAM</h2>
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_terry_wlkinson.jpg')}`}
                                            post='CEO' name='Terry Wilkinson'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4}  className='teamsection'>
                                <Teammember imag={`${require('../../images/th_atul_kamble.jpg')}`}
                                            post='CTO' name='Atul Kamble'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_zoe_chow.jpg')}`}
                                            post='CFO' name='Zoe Chow'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_sungwoo_choi.jpg')}`}
                                            post='CMO' name='Sungwoo Choi'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_zareena_alwee.jpg')}`}
                                            post={['Head of', <br/>, 'International Business']} name='Zareena Alwee'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_zareena_alwee-07.jpg')}`}
                                            post={['Head of', <br/>, 'Compliance']} name='Elo Kukk'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_zareena_alwee-06.jpg')}`}
                                            post={['Head of', <br/>, 'Public Relations']} name='Olivia Orlof'></Teammember>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={4} className='teamsection'>
                                <Teammember imag={`${require('../../images/th_vincent_ang.jpg')}`}
                                            post={['Head of Training', <br/>, '& Development']} name='Vincent Ang'></Teammember>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }

}