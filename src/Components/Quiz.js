import React, { Component } from "react";
import "../App.css";
import { ChevronLeft, ChevronRight } from "react-feather";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      green: false,
      right: 2,
      selected_answer_index: 0,
      current_question: this.props.questions[0],
	  active_question: 1,
    check_submission_modal: false,
      selected_answers: {}
    };
  }


  componentDidMount() {
    console.log(this.props)
    this.props.toggleHeader(false)
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

  checkCorrectAnswer(selected_option) {
    var lastSelected = document.getElementById(`option-${this.state.selected_answer_index}`)
    if(lastSelected) {lastSelected.classList.remove("selected-option")}
    var el = document.getElementById(`option-${selected_option}`)
    if(el) {
      el.classList.add("selected-option")
      this.state.selected_answers[this.state.active_question] = selected_option
      setTimeout(() =>this.setState({selected_answer_index: selected_option}), 10)
    } 
  }

  render(){
	  var { current_question } = this.state
	  console.log("prabhat state",this.state);
  

    return (
      <div>
      <div class="ui breadcrumb" style={{textAlign:'left',fontSize:'0.8em'}}>
		  <a class="section" onClick={()=> this.props.showTopic()}>{this.props.topic}</a>
		  <i aria-hidden="true" class="right chevron icon divider"></i>
		  <a class="section"  onClick={()=> this.props.showPart()}>{this.props.part}</a>
		  <i aria-hidden="true" class="right arrow icon divider"></i>
		  <div class="active section">Add Question</div>
		</div>
    <div
    style={{
      margin: "1.5rem 3rem 1.5rem 3rem",
      textAlign: "left"
    }}
    >
      <h1>Q. {this.state.active_question}</h1>
      </div>

      <div style={{
        margin: "1rem 2rem 1rem 2rem"
      }} className="ui divider"></div>
        
        <div
          style={{
            padding: "10px",
            margin: "10px"
          }}
        >
          <h3>{current_question.question}</h3>
          {current_question.mcq_options.map((option, i) => (
            <label className="container"
            onClick={() => this.checkCorrectAnswer(i+1)}
            >{option}
            <input type="radio" name="radio"/>
            <span className={ this.state.selected_answers[this.state.active_question] !== i+1? "checkmark" : "checkmark selected-option"} id={`option-${i+1}`}></span>
            </label>
          ))}
        </div>

        <div>
          <button
            style={{ float: "left", marginLeft: "1.5rem" }}
            className="navigation-button"
          >
            <div  style={{padding: "0.2rem"}}>Mark for review</div>
          </button>
          <button
            style={{ float: "right", marginRight: "1.5rem" }}
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
          <div style={{padding: "0.2rem"}}>  {this.state.active_question === this.props.questions.length ? "Submit" : "Next"}</div>
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
      </div>
    );
  }
}

export default Quiz;
