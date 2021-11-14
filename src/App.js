import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    )
  }
}

export default App;