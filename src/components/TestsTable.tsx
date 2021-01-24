import React, {useState} from 'react'
import TestsTableItemRow from './TestsTableItemRow'
import TestsTableSortControlTd from './TestsTableSortControlTd'
import { TestsTablePropsType, TestTableComponentType, SortParamsType, SortOrderEnum, SortCategoriesEnum, StatusEnum } from '../utils/types'

const TestsTable: TestTableComponentType = (props: TestsTablePropsType) => {
  const [sortParams, setSortParams] = useState<SortParamsType>({category: null, order: null})
  const {items} = props
  const sortedItems = [...items]

  const handleSortParamsChange = (category: SortCategoriesEnum) => {
    if(category !== sortParams.category) {
      setSortParams({category: category, order: SortOrderEnum.ASCENDING})
    } else if(sortParams.order === SortOrderEnum.DEFAULT) {
      setSortParams({...sortParams, order: SortOrderEnum.ASCENDING})
    } else if(sortParams.order === SortOrderEnum.ASCENDING) {
      setSortParams({...sortParams, order: SortOrderEnum.DESCENDING})
    } else if(sortParams.order === SortOrderEnum.DESCENDING) {
      setSortParams({...sortParams, order: SortOrderEnum.DEFAULT})
    }
  }

  if(sortParams.order !== null && sortParams.order !== SortOrderEnum.DEFAULT) {
    switch(sortParams.category) {
      case SortCategoriesEnum.NAME:
        sortParams.order === SortOrderEnum.ASCENDING
          ? sortedItems.sort((a, b) => a.name > b.name ? -1 : 1).reverse()
          : sortedItems.sort((a, b) => a.name > b.name ? -1 : 1)
        break
      case SortCategoriesEnum.TYPE:
        sortParams.order === SortOrderEnum.ASCENDING
          ? sortedItems.sort((a, b) => a.type > b.type ? -1 : 1).reverse()
          : sortedItems.sort((a, b) => a.type > b.type ? -1 : 1)
        break
      case SortCategoriesEnum.SITE:
        sortParams.order === SortOrderEnum.ASCENDING
          ? sortedItems.sort((a, b) => a.site > b.site ? -1 : 1).reverse()
          : sortedItems.sort((a, b) => a.site > b.site ? -1 : 1)
        break
      case SortCategoriesEnum.STATUS:
        sortParams.order === SortOrderEnum.ASCENDING
          ? sortedItems.sort((a, b) => StatusEnum[a.status] > StatusEnum[b.status] ? -1 : 1).reverse()
          : sortedItems.sort((a, b) => StatusEnum[a.status] > StatusEnum[b.status] ? -1 : 1)
    }
  }
  
  return (
    <>
      {
        items &&  
        <table className="page-main__table tests-table">
          <thead className="tests-table__header">
            <tr className="tests-table__row-column-labels">
              <TestsTableSortControlTd
                sortCategory={SortCategoriesEnum.NAME}
                sortParams={sortParams}
                onSortParamsChange={() => handleSortParamsChange(SortCategoriesEnum.NAME)}
              />
              <TestsTableSortControlTd
                sortCategory={SortCategoriesEnum.TYPE}
                sortParams={sortParams}
                onSortParamsChange={() => handleSortParamsChange(SortCategoriesEnum.TYPE)}
              />
              <TestsTableSortControlTd
                sortCategory={SortCategoriesEnum.STATUS}
                sortParams={sortParams}
                onSortParamsChange={() => handleSortParamsChange(SortCategoriesEnum.STATUS)}
              />
              <TestsTableSortControlTd
                sortCategory={SortCategoriesEnum.SITE}
                sortParams={sortParams}
                onSortParamsChange={() => handleSortParamsChange(SortCategoriesEnum.SITE)}
              />
              <td className="tests-table__column-label-link"></td>
              <th></th>
            </tr>
          </thead>
          <tbody className="tests-table__body">
            {sortedItems.map(item => <TestsTableItemRow data={item} key={item.id}/>)}
          </tbody>
        </table>
      }
    </>
  )
}

export default TestsTable