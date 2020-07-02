import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import About from '../Containers/About/About'
import Projects from '../Containers/Projects/Projects'
import Contact from '../Containers/Contact/Contact'
import '../index.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
