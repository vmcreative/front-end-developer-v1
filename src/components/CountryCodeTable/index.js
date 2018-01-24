import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import { Row, Table } from 'react-bootstrap'

class CountryCodeTable extends Component {
  componentDidMount () {
    this.props.initialiseApp()
  }

  getRows (data) {
    return map(
      ({ name, code, dialCode }) => (
        <tr key={code}>
          <td>{name}</td>
          <td>{code}</td>
          <td>{dialCode}</td>
        </tr>
      ),
      data
    )
  }

  getTable (data) {
    return data ? (
      <Table striped responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Dial Code</th>
          </tr>
        </thead>
        <tbody>{this.getRows(this.props.externalData)}</tbody>
      </Table>
    ) : (
      <p>Loading data</p>
    )
  }

  render () {
    return (
      <div>
        <Row key='header-row'>
          <h1>Country Calling Codes</h1>
        </Row>
        <Row key='body-row'>{this.getTable(this.props.externalData)}</Row>,
      </div>
    )
  }
}

CountryCodeTable.propTypes = {
  externalData: PropTypes.array,
  initialiseApp: PropTypes.func.isRequired
}

export default CountryCodeTable
