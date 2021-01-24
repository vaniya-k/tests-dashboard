import React from 'react'
import TestsTableRow from './TestsTableRow'
import { TestsTablePropsType, TestTableComponentType } from '../utils/types'
import { getSiteString } from '../utils/format-tools'

const TestsTable: TestTableComponentType = (props: TestsTablePropsType) => {
  const {items} = props
  const {sites} = props
  
  return (
    <>
      {items && sites && 
      <table className="page-main__table tests-table">
        <thead className="tests-table__header">
          <tr className="tests-table__row-column-labels">
            <td className="tests-table__column-label-name">
              <span className="tests-table__label-text-name">Name</span>
              <img className="tests-table__label-filter-icon tests-table__label-filter-icon--descending" 
                src="./assets/icons/filter-arrow-up.svg" alt="Filtered by name – descending"/>
            </td>
            <td className="tests-table__column-label-type">Type</td>
            <td className="tests-table__column-label-status">Status</td>
            <td className="tests-table__column-label-site">Site</td>
            <td className="tests-table__column-label-link"></td>
            <th></th>
          </tr>
        </thead>
        <tbody className="tests-table__body">
          <TestsTableRow data={{...items[0], site: getSiteString(items[0], sites)}}/>
        </tbody>
      </table>
    }
    </>
  )
}

export default TestsTable