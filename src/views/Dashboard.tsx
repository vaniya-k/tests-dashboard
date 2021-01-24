import React from 'react'
import TestsTable from '../components/TestsTable'
import { fetchJSONHook }  from '../utils/hooks'
import { SITES_API, TESTS_API } from '../utils/constants'
import { DashboardViewType, SitesType, TestsType, TestType, TestsTableRowsData } from '../utils/types'
import { getSiteString } from '../utils/format-tools'

const Dashboard: DashboardViewType = () => {
  const [items, itemsRequestCycle] = fetchJSONHook(`${TESTS_API}`)
  const [sites, sitesRequestCycle] = fetchJSONHook(`${SITES_API}`)

  let itemsToRender: TestsTableRowsData = []

  if(items && sites) {
    itemsToRender = (items as TestsType).map((item: TestType) => {
      return {...item, site: getSiteString(item, (sites as SitesType))}
    })
  }

  return (
    <>
      <header className="page-container page-header">
        <div className="page-header__search-wrapper">
          <input type="text" className="page-header__search-input" />
          <span className="page-header__search-results">7 tests</span>
        </div>
      </header>
      <main className="page-container page-main">
        {itemsToRender.length !== 0 && <TestsTable items={itemsToRender} />}
      </main>
    </>
  ) 
}

export default Dashboard
