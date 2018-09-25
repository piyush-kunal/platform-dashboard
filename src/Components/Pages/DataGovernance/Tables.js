import React, { Component, Fragment } from 'react'
import { Helmet  } from "react-helmet";
import SimpleTable from '../../Tables/SimpleTable'
import TableSort from '../../Tables/TableSort'

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
      data: [],
      newData: []
    }
  }

  async componentDidMount() {
    const data = await (await fetch('http://localhost:3004/ro_rw')).json()
    this.setState({ data })
    // const json  = await (await data.forEach(element => {
    //   const obj = {
    //     team: '',
    //     used_space: '',
    //     free_space: '',
    //     total_space: ''
    //   }
    //   const arr = [];
    //   const str = element.team.split('/' && '_')
    //     .filter(word => word.length < 6 && word.length > 4).join()

    //   obj.team = str;
    //   obj.used_space = parseFloat(element.used_space);
    //   obj.free_space = parseFloat(element.free_space);
    //   obj.total_space = parseFloat(element.total_space);
     
    //   this.setState({ newData : arr.push(obj)})
    // }))
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
