import React, { Component } from 'react';
import '../App.css';

class Quiz extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	green:false,
			right:2,
			current_question_number: 0,
			selected_answer_index: 0,
			current_question: this.props.questions[1]
        }
        
}

checkCorrectAnswer(selected_option) {
	var { current_question } = this.state
	var el = document.getElementById(current_question.correct_answer);
	var clickedAnswer = document.getElementById(selected_option)
	if (selected_option === current_question.correct_answer) {
		el.classList.remove("whiteButton");
		el.classList.add("greenButton");
	}
	else {
		el.classList.remove("whiteButton");
		clickedAnswer.classList.remove("whiteButton")
		clickedAnswer.classList.add("redButton")
		el.classList.add("greenButton");
	}
}



  render(){
	  var { current_question } = this.state
  
  	return(
  		<div>

			<button class="ui secondary button" style={{margin:'10px'}}>{this.props.part}</button>	  		
	      	<div style={{backgroundColor:'#aeb6bf',padding:'10px',margin:'10px'}}>
	      	<p>{current_question.question}</p>
			  {current_question.mcq_options.map((option, i) => 
				<div id={i} onClick={()=> this.checkCorrectAnswer(i)} className="whiteButton" style={{borderRadius:'0 20px 20px 0',cursor:'pointer',paddingTop:'6px',marginTop:'10px',height:'30px'}}>{option}<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
				)}
	      	</div>

		</div>

		)
	}
}


export default Quiz;