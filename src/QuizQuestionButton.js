import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
      </li>
    )
  }
}

function handleClick(){
    this.props.clickHandler(button_text)
}

export default QuizQuestionButton 