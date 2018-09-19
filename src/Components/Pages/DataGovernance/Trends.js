import React ,{ Fragment } from 'react'
import SimpleLineChart from '../../Charts/SimpleLineChart'

const styles = {
    chartContainer: {
        marginLeft: -22,
    },
}

export default () => {
  return (
    <Fragment>
      <div className={styles.chartContainer}>
        <SimpleLineChart />
      </div>
    </Fragment>
  )
}
