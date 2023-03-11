import {Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import StudentLogin from './components/StudentLogin'
import SignIn from './components/SignIn'
import TeacherLogin from './components/TeacherLogin'

import Student from './components/Student'
import Teacher from './components/Teacher'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/student-login" component={StudentLogin} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/teacher-login" component={TeacherLogin} />
      <Route exact path="/teacher" component={Teacher} />
    </Switch>
  </>
)

export default App
