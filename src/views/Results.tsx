import React from 'react'
import { ResultsViewType, ResultsPropsType } from '../utils/types'

const Results: ResultsViewType = (props: ResultsPropsType) => {
  const { id } = props
  return <div>Results {`${id}`}</div>
}

export default Results
