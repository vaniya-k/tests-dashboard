import { useState, useEffect } from 'react'
import { FetchHookDataType, NetworkStatusType, TestsType } from './types'

export const fetchHook = (url: string): [TestsType, NetworkStatusType] => {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatusType>({isLoading: null, hasErroredOut: null})
  const [data, setData] = useState<FetchHookDataType>(null)

  const fetchTests = async () => {
    setNetworkStatus({...networkStatus, isLoading: true})
    
    const result =
      await fetch(url)
        .then(response => {
          if(!response.ok) return setNetworkStatus({isLoading: false, hasErroredOut: true})
          setNetworkStatus({isLoading: false, hasErroredOut: false})
          return response.json()
        })
  
    result && setData(result)
  }

  useEffect(() => {
    fetchTests()
  }, [url])

  return [data, networkStatus]
}