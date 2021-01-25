import React from 'react'
import { Link } from 'react-router-dom'
import { FAILED_FETCH_ALERT, TESTS_API } from '../utils/constants'
import { fetchJSONHook } from '../utils/hooks'
import { DetailsViewType, DetailsPropsType, DetailsViewEnum, TestType } from '../utils/types'

const Details: DetailsViewType = (props: DetailsPropsType) => {
  const {id, mode} = props
  const [details, detailsRequestCycle] = fetchJSONHook(`${TESTS_API}/${id}`)
  
  return (
    <>
      <div className="super-container page-container">
        <header className="page-header">
          <h1 className="page-header__title">{mode === DetailsViewEnum.RESULTS ? 'Results' : 'Finalize'}</h1>
          {details && <h2 className="page-header__subtitle">{(details as TestType).name}</h2>}
        </header>
        <main className="page-main">
          {
            detailsRequestCycle.hasErroredOut &&
            <p className="page-main__alert">{FAILED_FETCH_ALERT}</p>
          }
        </main>
        <footer className="footer__container">
          <Link className="back-link" to={`/`}>
            <img className="back-link__icon" src="../assets/icons/back.svg"/>
            <span className="back-link__text">Back</span>
          </Link>
        </footer>
      </div>
      
    </>
  )
}

export default Details
