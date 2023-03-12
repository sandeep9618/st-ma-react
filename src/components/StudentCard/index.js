import {Component} from 'react'
import './index.css'

class StudentCard extends Component {
  state = {answerIp: ''}

  onChangeAnswer = event => {
    this.setState({answerIp: event.target.value})
  }

  onAddAnswer = () => {
    const {answerIp} = this.state
    const {eachItem, onAddAnswerToState} = this.props
    const {id} = eachItem
    onAddAnswerToState({id, answer: answerIp})
  }

  render() {
    const {answerIp} = this.state
    const {eachItem, onAddAnswerToState} = this.props
    const {question, id} = eachItem
    return (
      <li className="student-card">
        <p>
          {id}. {question}
        </p>
        <div className="answer-input-container">
          <input
            type="text"
            className="add-answer-input"
            placeholder="Add Answer"
            value={answerIp}
            onChange={this.onChangeAnswer}
          />
          <button className="add-input-btn" onClick={this.onAddAnswer}>
            Add
          </button>
        </div>
      </li>
    )
  }
}

export default StudentCard
