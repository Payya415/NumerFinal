import React from 'react'
import Navbarr from './components/Navbarr'
import Bisection from './pages/Bisection'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FalsePosition from './pages/FalsePosition'
import Punyawee from './pages/Punyawee'
import OnePointIteration from './pages/OnePointIteration'
import NewtonRaphson from './pages/NewtonRaphson'
import Secant from './pages/Secant'
const App = () => {
  return (
    <Router>
      <Navbarr/>
      <Switch>
        <Route exact path = '/Bisection' component ={Bisection}/>
        <Route exact path = '/FalsePosition' component ={FalsePosition}/>
        <Route exact path = '/Punyawee' component ={Punyawee}/>
        <Route exact path = '/OnePointIteration' component={OnePointIteration}/>
        <Route exact path = '/NewtonRaphson' component={NewtonRaphson}/>
        <Route exact path = '/Secant' component={Secant}/>
      </Switch>
    </Router>
  )
}

export default App