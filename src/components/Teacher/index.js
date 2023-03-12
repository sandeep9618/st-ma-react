import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'

import TeacherCalculationCard from '../TeacherCalculationCard'

import './index.css'

const AnswerItem = props => {
  const {i} = props
  const {answer, id} = i
  return (
    <li className="answer-item-in-teacher">
      {id}) {answer}
    </li>
  )
}

class Teacher extends Component {
  state = {
    userInput: '',
    calculations: [],
    studentAnswers: [],
    studentDetails: {},
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
    const jsonData = localStorage.getItem('student_answers')
    if (jsonData !== null) {
      const answersFromLocalstorage = JSON.parse(jsonData)
      this.setState({studentAnswers: answersFromLocalstorage})
    }
    const studentDetails = localStorage.getItem('student_info')
    if (studentDetails !== null) {
      const convertingToparsed = JSON.parse(studentDetails)
      this.setState({studentDetails: convertingToparsed})
    }
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClearAllItems = () => {
    localStorage.removeItem('teacher_cals')
    localStorage.removeItem('student_answers')
    this.setState({calculations: []})
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

  renderAnswers = () => {
    const {studentAnswers, studentDetails} = this.state
    const {userName} = studentDetails
    return (
      studentAnswers.length !== 0 && (
        <div className="answer-container">
          <p>{userName}'s answers</p>
          <ul className="student-answers-container-in-teacher">
            {studentAnswers.map(i => (
              <AnswerItem i={i} key={i.id} />
            ))}
          </ul>
        </div>
      )
    )
  }

  render() {
    const {userInput, calculations} = this.state

    return (
      <div className="bg-container-for-teacher">
        <div className="header">
          <Link to="/" className="link-item-student">
            <p className="header-text-student">Logout</p>
            <FiLogOut size={15} />
          </Link>
          <button
            className="clear-btn-in-teacher"
            type="button"
            onClick={this.onClearAllItems}
          >
            Clear Questions
          </button>
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
          <div className="questions-and-answers">
            {calculations.length !== 0 && this.renderCalculations()}
            {this.renderAnswers()}
          </div>
        </div>
      </div>
    )
  }
}
export default Teacher
