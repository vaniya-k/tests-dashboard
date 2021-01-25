import React, {useState} from 'react'
import TestsTable from '../components/TestsTable'
import { fetchJSONHook }  from '../utils/hooks'
import { SITES_API, TESTS_API, ZERO_MATCHES_ALERT, FAILED_FETCH_ALERT } from '../utils/constants'
import { DashboardViewType, SitesType, TestsType, TestType, TestsTableRowsData } from '../utils/types'
import { getSiteString } from '../utils/format-tools'

const Dashboard: DashboardViewType = () => {
  const [items, itemsRequestCycle] = fetchJSONHook(`${TESTS_API}`)
  const [sites, sitesRequestCycle] = fetchJSONHook(`${SITES_API}`)
  const [filterQuery, setFilterQuery] = useState('')

  let itemsToRender: TestsTableRowsData = []

  if(items && sites) {
    itemsToRender =
      (items as TestsType)
        .filter((item: TestType) => item.name.toLowerCase().includes(filterQuery.toLowerCase()))
        .map((item: TestType) => {return {...item, site: getSiteString(item, (sites as SitesType))}})
  }

  return (
    <>
      <header className="page-container page-header">
        <h1 className="page-header__title">Dashboard</h1>
        <div className="page-header__search-wrapper">
          <img
            className="page-header__search-icon"
            src="./assets/icons/magnifying-glass.svg"
          />
          <input
            type="text"
            value={filterQuery}
            className="page-header__search-input"
            onChange={(e) => setFilterQuery(e.target.value)}
          />
          {
            items &&
            <span className="page-header__search-results">
              {itemsToRender.length === 1 ? '1 result' : `${itemsToRender.length} results`}
            </span>
          }
        </div>
      </header>
      <main className="page-container page-main">
        {itemsToRender.length !== 0 && <TestsTable items={itemsToRender}/>}
        {
          filterQuery !== '' &&
          !itemsRequestCycle.hasErroredOut &&
          !sitesRequestCycle.hasErroredOut &&
          itemsToRender.length === 0 &&
          <>
            <p className="page-main__alert">{ZERO_MATCHES_ALERT}</p>
            <button className="btn btn--green" onClick={() => setFilterQuery('')}>Reset</button>
          </>
        }
        {
          (itemsRequestCycle.hasErroredOut || sitesRequestCycle.hasErroredOut) &&
          <p className="page-main__alert">{FAILED_FETCH_ALERT}</p>
        }
      </main>
    </>
  ) 
}

export default Dashboard
