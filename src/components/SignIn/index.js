import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class SignIn extends Component {
  state = {nameIp: '', passIp: '', gender: 'male', type: ''}

  onChangeUsernameIp = event => {
    this.setState({nameIp: event.target.value})
  }

  onChangePasswordIp = event => {
    this.setState({passIp: event.target.value})
  }

  onChangeGenderIp = event => {
    this.setState({gender: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onStoreDData = () => {
    const {history} = this.props
    const {nameIp, passIp, type, gender} = this.state
    const userData = {userName: nameIp, password: passIp, type, gender}
    const jsonData = JSON.stringify(userData)

    if (type === 'teacher') {
      localStorage.setItem('teacher_info', jsonData)
    } else {
      localStorage.setItem('student_info', jsonData)
    }
    this.setState({nameIp: '', passIp: '', type: '', gender: 'male'})
    history.replace('/')
  }

  onSubmitData = event => {
    event.preventDefault()
    const {nameIp, passIp, type} = this.state
    if (nameIp === '') {
      alert('Please enter a valid name')
    } else if (passIp === '') {
      alert('Please enter a valid password')
    } else if (type === '') {
      alert('Please select the type')
    } else {
      this.onStoreDData()
    }
  }

  render() {
    const {nameIp, passIp} = this.state
    return (
      <div className="sign-in-bg-container">
        <form className="sign-in-container" onSubmit={this.onSubmitData}>
          <label className="input-label" htmlFor="username">
            Enter Username
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            placeholder="Username"
            value={nameIp}
            onChange={this.onChangeUsernameIp}
          />
          <label className="input-label" htmlFor="password">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            placeholder="Password"
            value={passIp}
            onChange={this.onChangePasswordIp}
          />
          <label className="input-label" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            className="gender-input"
            onChange={this.onChangeGenderIp}
          >
            <option>Male</option>
            <option>Female</option>
            <option>others</option>
          </select>
          <div className="radio-container">
            <input
              type="radio"
              id="student"
              className="radio"
              name="type"
              value="student"
              onChange={this.onChangeType}
            />
            <label className="radio-label" htmlFor="student">
              Student
            </label>
            <input
              type="radio"
              id="teacher"
              className="radio"
              name="type"
              value="teacher"
              onChange={this.onChangeType}
            />
            <label className="radio-label" htmlFor="teacher">
              Teacher
            </label>
          </div>
          <button type="submit" className="sign-up">
            Sign up
          </button>
          <Link to="/" className="link-item">
            ---> Home
          </Link>
        </form>
      </div>
    )
  }
}

export default SignIn
