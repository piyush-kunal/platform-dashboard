import React, { Fragment } from 'react'
import SimpleTable from '../../Tables/SimpleTable'

const styles = {
    tableContainer: {
        height: 320,
      },
}

export default () => {
  return (
    <Fragment>
      <div className={styles.tableContainer}>
            <SimpleTable />
        </div> 
    </Fragment>
  )
}
