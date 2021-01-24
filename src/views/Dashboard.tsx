import React from 'react'
import TestsTable from '../components/TestsTable'
import { fetchJSONHook }  from '../utils/hooks'
import { SITES_API, TESTS_API } from '../utils/constants'
import { DashboardViewType, FetchJSONHookItemsType, FetchJSONHookSitesType } from '../utils/types'

const Dashboard: DashboardViewType = () => {
  const [items, itemsRequestCycle] = fetchJSONHook(`${TESTS_API}`)
  const [sites, sitesRequestCycle] = fetchJSONHook(`${SITES_API}`)

  return (
    <>
      <header className="page-container page-header">
        <div className="page-header__search-wrapper">
          <input type="text" className="page-header__search-input" />
          <span className="page-header__search-results">7 tests</span>
        </div>
      </header>
      <main className="page-container page-main">
        <TestsTable items={items as FetchJSONHookItemsType} sites={sites as FetchJSONHookSitesType} />
      </main>
    </>
  ) 
}

export default Dashboard
