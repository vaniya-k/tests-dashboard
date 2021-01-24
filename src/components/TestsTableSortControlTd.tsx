import React from 'react'
import { SortOrderEnum, TestsTableSortControlTdComponentType, TestsTableSortControlTdPropsType } from '../utils/types'

const TestsTableSortControlTd: TestsTableSortControlTdComponentType = (props: TestsTableSortControlTdPropsType) => {
  const {onSortParamsChange, sortCategory, sortParams} =  props

  return (
    <td className={`tests-table__column-label-${sortCategory}`}>
      <div className="tests-table__column-label-wrapper">
        <span className="tests-table__column-label-text" onClick={onSortParamsChange}>{`${sortCategory[0].toUpperCase()}${sortCategory.slice(1)}`}</span>
        {
          sortParams.category === sortCategory &&
          sortParams.order !== SortOrderEnum.DEFAULT &&
          <img
            className={`tests-table__column-label-icon tests-table__column-label-icon--${sortParams.order}`}
            src="./assets/icons/filter-arrow-up.svg"
            alt={`Sorted by ${sortCategory} – ${sortParams.order}`}
            onClick={onSortParamsChange}
          />
        }
      </div>
    </td>
  )
}

export default TestsTableSortControlTd