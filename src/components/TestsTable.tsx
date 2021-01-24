import React from 'react'
import TestsTableRow from './TestsTableRow'
import { TestsTablePropsType, TestTableComponentType } from '../utils/types'

const TestsTable: TestTableComponentType = (props: TestsTablePropsType) => {
  const {items} = props

  console.log(items)
  
  return (
    <>
      {
        items &&  
        <table className="page-main__table tests-table">
          <thead className="tests-table__header">
            <tr className="tests-table__row-column-labels">
              <td className="tests-table__column-label-name">
                <span className="tests-table__column-label-text">Name</span>
                <img className="tests-table__column-label-icon tests-table__column-label-icon--descending" 
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
            {items.map(item => <TestsTableRow data={item} key={item.id}/>)}
          </tbody>
        </table>
      }
    </>
  )
}

export default TestsTable