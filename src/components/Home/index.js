import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Home extends Component {
  onClickTogoStudentRoute = () => {}

  render() {
    return (
      <div className="details-bg-container">
        <h1 className="details-heading">Welcome !</h1>
        <p className="details-para">
          Please click the below option to continue...
        </p>
        <div className="details-card">
          <div>
            <Link to="/student-login">
              <button
                className="student-btn"
                type="button"
                onClick={this.onClickTogoStudentRoute}
              >
                student
              </button>
            </Link>
            <Link to="/teacher-login">
              <button className="teacher-btn" type="button">
                Teacher
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
