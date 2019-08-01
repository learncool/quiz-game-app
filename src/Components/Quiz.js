import React, { Component } from "react";
import "../App.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Modal } from "semantic-ui-react"

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: false,
      right: 2,
      current_question_number: 0,
      selected_answer_index: 0,
      current_question: this.props.questions[0],
	  active_question: 1,
	  check_submission_modal: false
    };
  }

  checkCorrectAnswer(selected_option) {
    var { current_question } = this.state;
    var el = document.getElementById(current_question.correct_answer);
    var clickedAnswer = document.getElementById(selected_option);
    if (selected_option === current_question.correct_answer) {
      el.classList.remove("whiteButton");
      el.classList.add("greenButton");
    } else {
      el.classList.remove("whiteButton");
      clickedAnswer.classList.remove("whiteButton");
      clickedAnswer.classList.add("redButton");
      el.classList.add("greenButton");
    }
  }

  componentDidMount() {
    var el = document.getElementById("question-1");
    if (el) el.classList.add("questions-active");
  }
  rrender() {
    return (
      <div>
        <div className="bottom-navigation" />
      </div>
    );
  }


  render(){
	  var { current_question } = this.state
	  console.log("prabhat state",this.state);
	  console.log("props are",this.props);
  

    return (
      <div>
        <button class="ui secondary button" style={{ margin: "10px" }}>
          {this.props.part}
        </button>
        <div
          style={{
            padding: "10px",
            margin: "10px"
          }}
        >
          <p>{current_question.question}</p>
          {current_question.mcq_options.map((option, i) => (
            <div
              id={i}
              onClick={() => this.checkCorrectAnswer(i)}
              className="whiteButton"
              style={{
                borderRadius: "0 20px 20px 0",
                cursor: "pointer",
                paddingTop: "6px",
                marginTop: "10px",
                height: "30px"
              }}
            >
              {option}
            </div>
          ))}
        </div>

        <div>
          <button
            style={{ float: "left", marginLeft: "3.5rem" }}
            className="navigation-button"
          >
            Mark for review
          </button>
          <button
            style={{ float: "right", marginRight: "3.5rem" }}
			className="navigation-button"
			onClick={() => {
				this.state.active_question === this.props.questions.length  ? 
				this.setState({
					check_submission_modal: true
				})
				: this.setState({active_question : this.state.active_question + 1
					,current_question: this.props.questions[this.state.active_question]
				}, () => {
					var ele = document.getElementById(
                        `question-${this.state.active_question-1}`
                      );
                      if (ele) ele.classList.remove("questions-active");
					let el = document.getElementById(
						`question-${this.state.active_question}`
					  );
					  el.scrollIntoView({behavior: "smooth", inline: "center"});
					  el.classList.add("questions-active");	
				})
			}}
          >
            {this.state.active_question === this.props.questions.length ? "Submit" : "Next"}
          </button>
        </div>

        <div>
          <div className="bottom-navigation">
            <ChevronLeft style={{ float: "left" }} />
            <ChevronRight style={{ float: "right" }} />
            <div
              style={{
                overflow: "auto"
              }}
            >
              {this.props.questions.map((q, i) => (
                <div className="questions">
                  <div
                    id={`question-${i + 1}`}
                    onClick={() => {
                      var el = document.getElementById(
                        `question-${this.state.active_question}`
                      );
                      if (el) el.classList.remove("questions-active");
                      this.setState(
                        {
                          active_question: i + 1,
                          current_question: this.props.questions[i]
                        },
                        () => {
                          let el = document.getElementById(
                            `question-${this.state.active_question}`
                          );
                          el.focus();
                          el.classList.add("questions-active");
                        }
                      );
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
		<Modal
		size="small"
		open={this.state.check_submission_modal}
		><Modal.Content><div>Note</div>
			</Modal.Content></Modal>
      </div>
    );
  }
}

export default Quiz;
