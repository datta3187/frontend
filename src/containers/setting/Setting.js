import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { ToastContainer, toast } from "react-toastify"


import Footer from '../../components/Footer'
import Header from '../../components/Header'

export class Setting extends Component {

    render() {
        return (
            <div>
                <ToastContainer
                    enableMultiContainer
                    position={toast.POSITION.TOP_RIGHT}
                />
                <Header />

                <Container className="boxWithShadow userForms">
                    <div className="userFormHeader">
                        <h1>Detail</h1>
                    </div>

                    <Grid divided='vertically'>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                hjdgfhjsdghfjds
                            </Grid.Column>
                            <Grid.Column>
                                f;lgkjdslgjdklsg
                            </Grid.Column>
                            <Grid.Column>
                                dsgfdsgsdgdsgdsg
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                lkdvhdskljvhfkjsdf
                            </Grid.Column>
                            <Grid.Column>
                                dlkfjkldjfkldsf
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Footer />
            </div>
        )
    }
}
export default Setting