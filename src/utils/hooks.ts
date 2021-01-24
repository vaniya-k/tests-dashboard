import { useState, useEffect } from 'react'
import { FetchJSONHookDataType, RequestCycleType } from './types'

export const fetchJSONHook = (url: string): [FetchJSONHookDataType, RequestCycleType] => {
  const [requestCycle, setRequestCycle] = useState<RequestCycleType>({isLoading: null, hasErroredOut: null})
  const [data, setData] = useState<FetchJSONHookDataType>(null)

  const fetchTests = async () => {
    setRequestCycle({...requestCycle, isLoading: true})
    
    const result =
      await fetch(url)
        .then(response => {
          if(!response.ok) return setRequestCycle({isLoading: false, hasErroredOut: true})
          setRequestCycle({isLoading: false, hasErroredOut: false})
          return response.json()
        })
  
    result && setData(result)
  }

  useEffect(() => {
    fetchTests()
  }, [url])

  return [data, requestCycle]
}