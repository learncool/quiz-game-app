import React, { Component } from 'react';

class addQuestion extends Component{
	constructor(props){
		super(props);
		this.state={
			question:'',
			explanation:'',
			level:0,
			option1:'',
			option2:'',
			option3:'',
			option4:'',
			correctOptionNo:0

		}
	}
	submitQuestion(e){
		this.setState({question:e.target.value});
		console.log("#",this.state.question);
	}
	submitExplanation(e){
		this.setState({explanation:e.target.value});
		console.log("##",this.state.explanation);
	}
	submitLevel(e){
		this.setState({level:e.target.value});
		console.log("###",this.state.level);
	}
	submitOption1(e){
		this.setState({option1:e.target.value});
		console.log("####",this.state.option1);
	}
	submitOption2(e){
		this.setState({option2:e.target.value});
		console.log("#####",this.state.option2);
	}
	submitOption3(e){
		this.setState({option3:e.target.value});
		console.log("######",this.state.option3);
	}submitOption4(e){
		this.setState({option4:e.target.value});
		console.log("#######",this.state.option3);
	}
	submitCorrectAnswer(e){
		this.setState({correctOptionNo:e.target.value});
		console.log("########",this.state.correctOptionNo)
	}

	render(){
		return(
			<div>
				<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Question
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitQuestion(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Explanation
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitExplanation(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Level
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitLevel(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-1
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption1(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-2
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption2(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-3
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption3(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-4
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption4(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Correct-Option-No
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.correctOptionNo(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<button class="ui secondary button">Create Quiz</button>

			</div>
			


			);

	}
}

export default addQuestion;