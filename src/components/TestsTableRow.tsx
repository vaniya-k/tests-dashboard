import React from 'react'
import { composeRegularCaseString } from '../utils/format-tools'
import { TestsTableRowPropsType, TestTableRowComponentType, TypeEnum } from '../utils/types'

const getTrClassNameWithStatusModifier = (value: TypeEnum): string => {
  switch(value) {
    case 'CLASSIC':
      return 'tests-table__row tests-table__row--classic'
    case 'MVT':
      return 'tests-table__row tests-table__row--mvt'
    case 'SERVER_SIDE':
      return 'tests-table__row tests-table__row--server-side'
    default:
      return 'tests-table__row'
  }
}

const TestsTableRow: TestTableRowComponentType = (props: TestsTableRowPropsType) => {
  const {data} = props
  console.log(data)
  
  return (
    <tr className={getTrClassNameWithStatusModifier(data.type)}>
      <td className="tests-table__cell-name">{data.name}</td>
      <td className="tests-table__cell-type">{composeRegularCaseString(data.type)}</td>
      <td className="tests-table__cell-status">{composeRegularCaseString(data.status)}</td>
      <td className="tests-table__cell-site">{data.site}</td>
      <td className="tests-table__cell-link"><a href="#">Finalize</a></td>
    </tr>
  )
}

export default TestsTableRow