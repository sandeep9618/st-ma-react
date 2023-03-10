import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeacherLogin extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSetToLogin = () => {
    const {usernameInput, passwordInput} = this.state
    const storage = localStorage.getItem('teacher_info')
    if (storage === null) {
      this.setState({showSubmitError: true, errorMsg: 'please sign-up'})
    } else {
      const jsonData = JSON.parse(storage)
      const {userName, password} = jsonData

      if (userName !== usernameInput) {
        this.setState({
          showSubmitError: true,
          errorMsg: 'Please enter a valid name',
        })
      } else if (password !== passwordInput) {
        this.setState({
          showSubmitError: true,
          errorMsg: 'Please enter a valid password',
        })
      } else {
        const {history} = this.props
        history.replace('/teacher')
      }
    }
  }

  submitForm = async event => {
    const {usernameInput, passwordInput} = this.state
    event.preventDefault()
    if (usernameInput === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Please enter a valid name',
      })
    } else if (passwordInput === '') {
      this.setState({
        showSubmitError: true,
        errorMsg: 'Please enter a valid password',
      })
    } else {
      this.onSetToLogin()
    }
  }

  renderPasswordField = () => {
    const {passwordInput} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={passwordInput}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {usernameInput} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={usernameInput}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <div className="teacher-login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="teacher-login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <div className="sign-up-option-container">
            <p className="not-a-member">Not a member?</p>
            <Link to="/sign-in" className="sign-in-link">
              Signup now
            </Link>
          </div>
          <Link to="/" className="link-item">
            ---> Home
          </Link>
        </form>
      </div>
    )
  }
}

export default TeacherLogin
