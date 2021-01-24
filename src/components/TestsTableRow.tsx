import React from 'react'
import { Link } from 'react-router-dom'
import { StatusEnum, StatusUIEnum, TestsTableRowPropsType, TestTableRowComponentType, TypeEnum, TypeUIEnum } from '../utils/types'

const getTrClassNameWithTypeModifier = (value: TypeEnum): string => {
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

const getTdClassNameWithStatusModifier = (value: StatusEnum): string => {
  switch(value) {
    case 'PAUSED':
      return 'tests-table__cell tests-table__column-status tests-table__column-status--paused'
    case 'ONLINE':
      return 'tests-table__cell tests-table__column-status tests-table__column-status--online'
    case 'STOPPED':
      return 'tests-table__cell tests-table__column-status tests-table__column-status--stopped'
    default:
      return 'tests-table__cell tests-table__column-status'
  }
}

const TestsTableRow: TestTableRowComponentType = (props: TestsTableRowPropsType) => {
  const {data} = props
  
  return (
    <tr className={getTrClassNameWithTypeModifier(data.type)}>
      <td className="tests-table__cell tests-table__column-name">{data.name}</td>
      <td className="tests-table__cell tests-table__column-type">{TypeUIEnum[data.type]}</td>
      <td className={getTdClassNameWithStatusModifier(data.status)}>{StatusUIEnum[data.status]}</td>
      <td className="tests-table__cell tests-table__column-site">{data.site}</td>
      {
        data.status === StatusEnum.DRAFT
          ? <td className="tests-table__cell tests-table__column-link">
              <Link to={`/finalize/${data.id}`}>Finalize</Link>
            </td>
          : <td className="tests-table__cell tests-table__column-link">
              <Link to={`/results/${data.id}`}>Results</Link>
            </td>
      }
    </tr>
  )
}

export default TestsTableRow