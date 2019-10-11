import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import * as Api from "../../api/remoteApi";
import { Container, Image, Table, Divider, Button } from "semantic-ui-react";


class DocumentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            documents: []
        }
    }

    componentDidMount() {
        let api_url = 'resource/documents';
        this.setState({ loading: true });
        Api.remoteApi(api_url, 'get', {})
            .then(res => {
                this.setState({ documents: res });
                this.setState({ loading: false });
            });
    }

    render() {
        const res = this.state.documents
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
                                    ) : <Table.Row> No Date Found</Table.Row>
                            }
                        </Table.Body>
                    </Table>
                </Container>
                <Footer />
            </div>
        )

    }

}

export default DocumentList
