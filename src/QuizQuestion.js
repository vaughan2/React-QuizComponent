import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {incorrectAnswer: false};
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
        }
        if (this.setstate({ incorrectAnswer: true })) {
            this.setState({
                incorrectAnswer: false
            });
        } else if (this.setstate({ incorrectAnswer: false })) {
            this.setState({
                incorrectAnswer: true
            });
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
                        })}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? true : <p className='error'>Sorry, That's not right</p>}
            </main>
        )
    }
}

export default QuizQuestion 