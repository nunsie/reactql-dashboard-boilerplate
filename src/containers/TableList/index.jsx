import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import Card from '../../components/Card';

import allExamplesQuery from 'src/graphql/queries/allExamples.gql'

@graphql(allExamplesQuery)
class TableList extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading: props.data.loading,
            allExamples: props.data.allExamples || []
        }
    }

    componentWillReceiveProps (props) {
        if (props.data) {
            this.setState({
                loading: props.data.loading,
                allExamples: props.data.allExamples
            })
        }
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Country</th>
                                                <th>City</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.allExamples.map((example, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{example.index}</td>
                                                            <td>{example.name}</td>
                                                            <td>{example.salary}</td>
                                                            <td>{example.country}</td>
                                                            <td>{example.city}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
