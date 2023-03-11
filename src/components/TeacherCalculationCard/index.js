import './index.css'

const TeacherCalculationCard = props => {
  const {eachItem} = props
  const {firstDigit, secondDigit, mathFunction, question, id} = eachItem
  let solution = 0
  if (mathFunction.toLowerCase() === 'plus') {
    solution = firstDigit + secondDigit
  } else if (mathFunction.toLowerCase() === 'minus') {
    solution = firstDigit - secondDigit
  } else if (mathFunction.toLowerCase() === 'times') {
    solution = firstDigit * secondDigit
  } else {
    const round = firstDigit / secondDigit
    solution = Math.floor(round)
  }

  return (
    <li className="cal-task-teacher">
      <p className="question">
        {id}. {question}
      </p>
      <p className="answer">Answer: {solution}</p>
    </li>
  )
}

export default TeacherCalculationCard
