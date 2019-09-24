import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
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

                <Container className="boxWithShadow userForms kycForm">
                    <div className="userFormHeader">
                        <h1>Detail</h1>
                    </div>


                </Container>
                <Footer />
            </div>
        )
    }
}
export default Setting