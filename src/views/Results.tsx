import React, { FC } from 'react'

type ResultsPropsType = { id: string }
type ResultsType = FC<ResultsPropsType>

const Results: ResultsType = (props: ResultsPropsType) => {
  const { id } = props
  return <div>Results {`${id}`}</div>
}

export default Results
