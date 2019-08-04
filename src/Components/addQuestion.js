import React, { Component } from 'react';
import {breadcrumb} from 'semantic-ui-react';
import MentorOption from './MentorOption';

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

		};

	}
	submitQuestion(e){
		this.setState({question:e.target.value});
	}
	submitExplanation(e){
		this.setState({explanation:e.target.value});
	}
	submitLevel(e){
		this.setState({level:parseInt(e.target.value)});
	}
	submitOption1(e){
		this.setState({option1:e.target.value});
	}
	submitOption2(e){
		this.setState({option2:e.target.value});
	}
	submitOption3(e){
		this.setState({option3:e.target.value});
	}submitOption4(e){
		this.setState({option4:e.target.value});
	}
	submitCorrectAnswer(e){
		this.setState({correctOptionNo:parseInt(e.target.value)});
	}
	

	setTaxonomy(e){
    if(e.target.value === 'none'){
    this.setState({taxonomy:''})
    } else{
    this.setState({taxonomy:e.target.value})      
		}
		console.log("!!!", this.state)
	}
	
	ComponentDidMount(){
		console.log("final state element",this.state)
	}
	createResponse() {
		for(var key in this.state){
			console.log("value pikachu",key,this.state[key]);
			if(this.state[key]==''|| this.state[key]==null){
				document.getElementById('errorMessage').innerHTML='<div class="ui warning message"><div class="header">There is an Error!</div><p>Please Check , all the fields are properly filled.</p></div>';
			}
		}
		let app_data = this.props.app_data;
		app_data.topics.find(item=>item.name==this.props.topic)
		.sub_topics.find(item=>item.name==this.props.part).questions.push({
			correct_answer: this.state.correctOptionNo,
			explanation: this.state.explanation,
			level: this.state.level,
			mcq_options: [this.state.option1, this.state.option2, this.state.option3, this.state.option4],
			question: this.state.question		});
			delete app_data._id
		this.props.updateAppData(JSON.stringify(app_data)).then((res)=>{
		if(res.data.UpdateApplicationData.error==null){
				this.setState({backToMentor:true})
			}
		})	
	}
	

	render(){
		let partName=this.props.part;
		if(this.props.part.length>8 && window.innerWidth<=350){
			partName=partName.slice(0,8)+'....';
		}
		return(<div>
			{this.state.backToMentor?
				<div>
				<div class="ui success message" style={{margin:'10px'}}>
				  <div class="content">
				    <div class="header">Question Added Successfully.</div>
				    <p>Select 'Back to Topic'.</p>
				  </div>
				</div>
				</div>:
			<div>
				<div class="ui breadcrumb" style={{textAlign:'left',fontSize:'0.8em'}}>
				<span>
				  <strong class="section" onClick={()=> this.props.showTopic()}>{this.props.topic}</strong>
				  <i aria-hidden="true" class="right chevron icon divider"></i>
				  <strong class="section" onClick={()=> this.props.showPart()}>{partName}</strong>
				  <i aria-hidden="true" class="right arrow icon divider"></i>
				  <span style={{display:'inline'}} class="active section">Add Question</span>
				  </span>
				</div>
				<div id="errorMessage" style={{margin:'20px',background:'red'}}></div>
				<div id="quesiton-form" >
				<div className="ui labeled input" style={{margin:'10px', width: "90%"}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Question
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitQuestion(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	
            	<div className="ui action input" style={{width:'90%',margin:'10px'}}
							onChange={(e)=>e.target.value!==''?this.submitLevel(e):' '}
							>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Level
                  </div>
									<select
									style={{width: "90%"}}
                      className="ui compact selection dropdown write-post-topics"
                      value={this.state.taxonomy}
                    >
                      <option value="none" selected="none">
                        Select a taxonomy
                      </option>
										<option value={0}>Beginner</option>
										<option value={1}>Intermdediate</option>
										<option value={2}>Advanced</option>
                    </select>            		
            	</div>

            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-1
                  </div>

                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption1(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>

            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label'  style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Option-2
                  </div>
                  <input type="text"  required className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption2(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
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
                  <input type="number"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitCorrectAnswer(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px'}}>
                  <div className='ui label write-post-title-label' style={{padding: '1.2em 0.8em 0.75em',fontSize: '0.85em',width:'100px'}}>
                    Explanation
                  </div>
                  <input type="text"  className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitExplanation(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em'}}/>
            	</div>

							</div>
            	
            	<button class="ui secondary button" onClick={() => this.createResponse()}>Create Quiz</button>

			</div>}
			</div>
			


			);
		}

	}


export default addQuestion;