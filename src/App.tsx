import React from 'react'
import './styles.scss'
import Dashboard from './views/Dashboard'
import Results from './views/Details'
import { AppType, DetailsViewEnum, RoutePropsType } from './utils/types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App: AppType = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Dashboard/>}/>
        <Route exact path='/results/:testId' render={(props: RoutePropsType) => <Results id={props.match.params.testId} mode={DetailsViewEnum.RESULTS}/>}/>
        <Route exact path='/finalize/:testId' render={(props: RoutePropsType) => <Results id={props.match.params.testId} mode={DetailsViewEnum.FINALIZE}/>}/>
      </Switch>
    </Router>
  )
}

export default App
