import React from 'react'
import Dashboard from './views/Dashboard'
import Results from './views/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Dashboard />} />
        <Route exact path='/results/:testId' render={(props) => <Results id={props.match.params.testId} />} />
      </Switch>
    </Router>
  )
}

export default App
