import React, { Component, Fragment } from 'react'
import { Helmet  } from "react-helmet";
import SimpleTable from '../../Tables/SimpleTable'
import TableSort from '../../Tables/TableSort'
import { getROROWTeamDetails } from '../../utils'
import FilterSearch from '../../Common/FilterSearch'
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    tableContainer: {
        height: 320,
        paddingTop: 20,
        paddingBottom: 40
      },
      loader: {
        position: 'fixed',
        height: 320,
        align: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'white',
      }
}

export default class Tables  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data1 = await (await fetch('http://localhost:3004/ro_rw')).json()
    const data = await getROROWTeamDetails(data1)
    this.setState({ data })
    setTimeout(()=>{this.setState({ isLoading: false })}, 1000)
    // this.setState({ loading: false });
  }

  onFetch = data => {
    this.setState({ isLoading: true });
    
    setTimeout(()=>{
      this.setState({ data })
      this.setState({ isLoading: false })}, 1000)
  }

  render() {
    return (
      <Fragment>
        <FilterSearch onFetch={this.onFetch} />
         <Helmet>
                <meta charSet="utf-8" />
                <title>Tables</title>
        </Helmet>
        <div className={styles.tableContainer}>
              <SimpleTable data={this.state.data} load={this.state.isLoading}/>
        </div> 
        {/* <div className={styles.tableContainer}>
              <TableSort data={this.state.data} />
        </div>  */}
      </Fragment>
    )
  }
}
