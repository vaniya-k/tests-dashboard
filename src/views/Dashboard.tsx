import React from 'react'
import { fetchHook }  from '../utils/hooks'
import { TESTS_API } from '../utils/constants'
import { DashboardViewType } from '../utils/types'

const Dashboard: DashboardViewType = () => {
  const [data, networkStatus] = fetchHook(`${TESTS_API}`)

  console.log(data)
  console.log(networkStatus)

  return <div className='test'>Dashboard</div>
}

export default Dashboard
