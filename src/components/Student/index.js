import {Component} from 'react'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import StudentCard from '../StudentCard'

import './index.css'

class Student extends Component {
  state = {questions: [], answers: [], closePopUp: false}

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = () => {
    const jsonData = localStorage.getItem('teacher_cals')
    const parsedData = JSON.parse(jsonData)
    this.setState({questions: parsedData})
  }

  onAddAnswerToState = obj => {
    const {id, answer} = obj
    const {answers} = this.state
    if (answers.length !== 0) {
      const isIdMatched = answers.some(i => i.id === id)
      if (isIdMatched === true) {
        const remainingItems = answers.filter(i => i.id !== id)
        const data = [...remainingItems, obj]

        this.setState({answers: data})
      } else {
        this.setState({answers: [...answers, obj]})
      }
    } else {
      this.setState({answers: [obj]})
    }
  }

  onSaveToStoreAllItems = () => {
    const {answers} = this.state
    const jsonData = JSON.stringify(answers)
    localStorage.setItem('student_answers', jsonData)
    this.setState({closePopUp: true})
  }

  renderQuestions = () => {
    const {questions, answers} = this.state
    return questions !== null ? (
      <ul className="student-questions-container">
        {questions.map(eachItem => (
          <StudentCard
            key={eachItem.id}
            eachItem={eachItem}
            onAddAnswerToState={this.onAddAnswerToState}
          />
        ))}
      </ul>
    ) : (
      <p className="optional">There is no questions here...</p>
    )
  }

  render() {
    const {closePopUp, answers} = this.state
    return (
      <div className="student-bg-container">
        <div className="header-student">
          <Link to="/" className="link-item-student">
            <p className="header-text-student">Logout</p>
            <FiLogOut size={15} />
          </Link>

          <Popup
            modal
            trigger={
              <button className="save-btn" type="button">
                Save
              </button>
            }
            className="popup-content"
          >
            {close => {
              if (closePopUp === true) {
                close()
              }

              return (
                <div className="poup-container">
                  <p>Do you want to save all the answers!!!</p>
                  <div className="btn-pop-up-container">
                    <button
                      type="button"
                      className="close-btn"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="confirm-btn"
                      onClick={this.onSaveToStoreAllItems}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )
            }}
          </Popup>
        </div>
        {this.renderQuestions()}
      </div>
    )
  }
}
export default Student
