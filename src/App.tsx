import React from 'react'
import './styles.scss'
import Dashboard from './views/Dashboard'
import Results from './views/Results'
import { AppType } from './utils/types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App: AppType = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Dashboard/>}/>
        <Route exact path='/results/:testId' render={(props) => <Results id={props.match.params.testId}/>}/>
      </Switch>
    </Router>
  )
}

export default App
