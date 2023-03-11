import {Component} from 'react'
import {Link} from 'react-router-dom'

import TeacherCalculationCard from '../TeacherCalculationCard'

import './index.css'

class Teacher extends Component {
  state = {
    userInput: '',
    calculations: [],
  }

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = () => {
    const items = localStorage.getItem('teacher_cals')
    if (items !== null) {
      const parsed = JSON.parse(items)
      this.setState({calculations: parsed})
    }
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickToAddCal = () => {
    const {userInput, calculations} = this.state
    const data = userInput.split(' ')
    this.setState({userInput: ''})
    const user = userInput.split('(')

    const firstNumber = user[0]
    const secondNumber = user[2]
    const mathFun = user[1]
    let firstDigit = ''
    if (firstNumber === 'zero') {
      firstDigit = 0
    } else if (firstNumber === 'one') {
      firstDigit = 1
    } else if (firstNumber === 'two') {
      firstDigit = 2
    } else if (firstNumber === 'three') {
      firstDigit = 3
    } else if (firstNumber === 'four') {
      firstDigit = 4
    } else if (firstNumber === 'five') {
      firstDigit = 5
    } else if (firstNumber === 'six') {
      firstDigit = 6
    } else if (firstNumber === 'eight') {
      firstDigit = 8
    } else if (firstNumber === 'seven') {
      firstDigit = 7
    } else if (firstNumber === 'nine') {
      firstDigit = 9
    }

    let secondDigit = ''
    if (secondNumber === 'zero') {
      secondDigit = 0
    } else if (secondNumber === 'one') {
      secondDigit = 1
    } else if (secondNumber === 'two') {
      secondDigit = 2
    } else if (secondNumber === 'three') {
      secondDigit = 3
    } else if (secondNumber === 'four') {
      secondDigit = 4
    } else if (secondNumber === 'five') {
      secondDigit = 5
    } else if (secondNumber === 'six') {
      secondDigit = 6
    } else if (secondNumber === 'eight') {
      secondDigit = 8
    } else if (secondNumber === 'seven') {
      secondDigit = 7
    } else if (secondNumber === 'nine') {
      secondDigit = 9
    }
    if (firstDigit !== '' && secondDigit !== '') {
      const addData = {
        firstDigit,
        secondDigit,
        mathFunction: mathFun,
        id: calculations.length + 1,
        question: `${firstNumber}(${mathFun}(${secondNumber}()))`,
      }

      this.setState(prev => ({
        calculations: [...prev.calculations, addData],
      }))

      const teacherCalculations = localStorage.getItem('teacher_cals')

      if (teacherCalculations !== null) {
        const parsedData = JSON.parse(teacherCalculations)
        let array = [...parsedData, addData]
        console.log(array)
        array = JSON.stringify(array)
        localStorage.setItem('teacher_cals', array)
      } else {
        let singleItemArray = [addData]
        singleItemArray = JSON.stringify(singleItemArray)
        localStorage.setItem('teacher_cals', singleItemArray)
      }
    } else {
      alert('Please enter valid calculations')
    }
  }

  renderCalculations = () => {
    const {calculations} = this.state
    return (
      <ul className="teacher-cal-container">
        {calculations.map(eachItem => (
          <TeacherCalculationCard key={eachItem.id} eachItem={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, calculations} = this.state

    return (
      <div className="bg-container-for-teacher">
        <div className="header">
          <Link to="/" className="link-item">
            <p className="header-text">Log out->> </p>
          </Link>
        </div>
        <div className="teacher-bg-container">
          <h1 className="heading">Add Calculation</h1>
          <div>
            <input
              type="text"
              className="input"
              onChange={this.onChangeInput}
              value={userInput}
            />
            <button
              className="add-btn"
              type="button"
              onClick={this.onClickToAddCal}
            >
              Add
            </button>
          </div>
          {calculations.length !== 0 && this.renderCalculations()}
        </div>
      </div>
    )
  }
}
export default Teacher
