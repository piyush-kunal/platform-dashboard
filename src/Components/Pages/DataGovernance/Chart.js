import React ,{ Fragment } from 'react'
import SimplePieChart from '../../Charts/SimplePieChart'
import SimpleBarChart from '../../Charts/SimpleBarChart'

const styles = {
    chartContainer: {
        marginLeft: -22,
    },
}

export default () => {
  return (
    <Fragment>
      <div className={styles.chartContainer}>
        <SimplePieChart />
      </div>
      <div className={styles.chartContainer}>
        <SimpleBarChart />
      </div>
    </Fragment>
  )
}
