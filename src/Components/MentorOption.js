import React, { Component } from 'react';
import Quiz from './Quiz';
import AddQuestion from './addQuestion';

class MentorOption extends Component {
	constructor(props){
		super(props);
		this.state={
			showMentorOption:true,
			showAddQuestion:false,
			showPlayQuiz:false

		}
	}


	ComponentDidMount(){
		console.log("final state element",this.state)
	}
	render(){
		console.log("m props are ",this.props);
		
		return(

			<div >
			{this.state.showMentorOption?
				<div>
			<div className="add-question-btn" onClick={() => this.setState({showMentorOption:false,showAddQuestion:true})} style={{height:'100px',margin:'10px',backgroundColor:'#e5e7e9',padding:'36px',borderRadius:'20px'}}><h3>Add Questions</h3></div>
			<div className="play-quiz-btn" onClick={() => this.setState({showMentorOption:false,showPlayQuiz:true})} style={{height:'100px',margin:'10px',backgroundColor:'#e5e7e9',padding:'36px',borderRadius:'20px'}}><h3>Play Quiz</h3></div>

			</div>:null}
			{this.state.showAddQuestion?
			
			<AddQuestion app_data={this.props.app_data}
			updateAppData={this.props.updateAppData}
														topic={this.props.topic}
														showPart={() => {
															this.setState({showMentorOption:false,showPlayQuiz:false}, () => this.props.showPart())}}
														showTopic={this.props.showTopic}
														part={this.props.part}/>:null}
			{this.state.showPlayQuiz?
				<Quiz
				topic={this.props.topic}
				showTopic={this.props.showTopic}

				part={this.props.part}
				questions={this.props.questions}
				toggleHeader={this.props.toggleHeader}/>:null}
			</div>
			);
	}

		
}
export default MentorOption;