import {Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import SignIn from './components/SignIn'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-in" component={SignIn} />
    </Switch>
  </>
)

export default App
