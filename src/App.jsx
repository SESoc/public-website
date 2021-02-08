import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'containers/Home'
import Events from 'containers/Events'
import About from 'containers/About'
import GetInvolved from 'containers/GetInvolved'
import Blog from 'containers/Blog'
import Wise from 'containers/Wise'
import NavigationBar from 'components/NavigationBar'
import 'App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/getinvolved" component={GetInvolved} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/wise" component={Wise} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
