import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import { Container, Image, Table, Divider, Button } from "semantic-ui-react";
import {fetchDocuments} from "../../redux/actions/kyc";
import {connect} from "react-redux";


class DocumentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const res = this.props.documents
        return (
            <div>
                <Header />
                <Container className="boxWithShadow userForms kycForm">
                    <Button onClick={() => this.props.history.push("/kyc")} content='Add New Document' primary />
                    <Divider />
                    <Table fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Uploaded File</Table.HeaderCell>
                                <Table.HeaderCell>Doc Type</Table.HeaderCell>
                                <Table.HeaderCell>Doc Number</Table.HeaderCell>
                                <Table.HeaderCell>Doc Expire Date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                res.length > 0 ?
                                    res.map(doc =>
                                        <Table.Row>
                                            <Table.Cell><Image avatar src={doc.upload.url} /></Table.Cell>
                                            <Table.Cell> {doc.doc_type} </Table.Cell>
                                            <Table.Cell> {doc.doc_number} </Table.Cell>
                                            <Table.Cell> {doc.doc_expire} </Table.Cell>
                                        </Table.Row>
                                    ) : <Table.Row className="nodata-row">
                                        <Table.Cell colSpan='3' > No Data Found</Table.Cell>
                                        </Table.Row>
                            }
                        </Table.Body>
                    </Table>
                </Container>
                <Footer />
            </div>
        )

    }

}


function mapStateToProps(state) {
    return {
        documents: state.kyc.documents
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDocuments: () => dispatch(fetchDocuments())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(DocumentList);
