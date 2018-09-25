import React, { Component, Fragment } from 'react'
import { Helmet  } from "react-helmet";
import SimpleTable from '../../Tables/SimpleTable'
import TableSort from '../../Tables/TableSort'
import { getROROWTeamDetails } from '../../utils'

const styles = {
    tableContainer: {
        height: 320,
        paddingTop: 20,
        paddingBottom: 40
      },
}

export default class Tables  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const data1 = await (await fetch('http://localhost:3004/ro_rw')).json()
    const data = await getROROWTeamDetails(data1)
    this.setState({ data })
  }
  render() {
    return (
      <Fragment>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Tables</title>
        </Helmet>
        <div className={styles.tableContainer}>
              <SimpleTable data={this.state.data}/>
        </div> 
        <div className={styles.tableContainer}>
              <TableSort data={this.state.data} />
        </div> 
      </Fragment>
    )
  }
}
