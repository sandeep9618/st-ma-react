import {Component} from 'react'

import TeacherCalculationCard from '../TeacherCalculationCard'

import './index.css'

class Teacher extends Component {
  state = {
    userInput: '',
    calculations: [
      {
        firstDigit: 5,
        secondDigit: 2,
        mathFunction: 'divided_by',
        id: 1,
        question: 'five(divided_by(two()))',
      },
    ],
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickToAddCal = () => {
    const {userInput, calculations} = this.state
    const data = userInput.split(' ')
    const firstNumber = data[0]
    const secondNumber = data[2]
    const mathFun = data[1]
    let firstDigit = 0
    if (firstNumber === 'one') {
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

    let secondDigit = 0
    if (secondNumber === 'one') {
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
    const addData = {
      firstDigit,
      secondDigit,
      mathFunction: mathFun,
      id: calculations.length + 1,
      question: `${firstNumber}(${mathFun}(${secondNumber}))`,
    }
    if (userInput !== '') {
      this.setState(prev => ({
        calculations: [...prev.calculations, addData],
      }))
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
    )
  }
}
export default Teacher
