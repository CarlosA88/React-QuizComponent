import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <button type="submit">{this.props.button_text}</button>
        </li>
      </div>
    );
  }
}

export default QuizQuestionButton;
