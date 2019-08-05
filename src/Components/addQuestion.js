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
	}
	createResponse() {
		for(var key in this.state){
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
				  <strong style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',width:'100px'}} class="section" onClick={()=> this.props.showPart()}>{this.props.part}</strong>
				  <i aria-hidden="true" class="right arrow icon divider"></i>
				  <span style={{display:'inline'}} class="active section">Add Question</span>
				</span>
				</div>
				<div id="errorMessage" style={{margin:'20px',background:'red'}}></div>
				<div id="quesiton-form" style={{margin:'20px',boxShadow:'5px 5px 5px gray',background:'#eaeded'}}>
				<div className="ui labeled input" style={{margin:'10px', width:'90%',borderBottom:'1px solid #ebe8e4'}}>
                  <input type="text"  placeholder="Question" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitQuestion(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	
            


            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}} >
                  <input type="text"  placeholder="option-1" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption1(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>

            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}}>
                  <input type="text"  placeholder="option-2" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption2(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}}>
                  
                  <input type="text"  placeholder="Option-3" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption3(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}}>
                  
                  <input type="text"  placeholder="Option-4" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitOption4(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}}>
                  <input type="number"  placeholder="Correct Option No:" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitCorrectAnswer(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	<div className="ui labeled input" style={{width:'90%',margin:'10px',borderBottom:'1px solid #ebe8e4'}}>
                  <input type="text"  placeholder="Explanation" className="write-post-title" onChange={(e)=>e.target.value!==''?this.submitExplanation(e):' '} style={{padding:'0.8em 0.6em 0.8em 0.6em',border:'none'}}/>
            	</div>
            	<div className="category-buttons" style={{width:'90%',margin:'10px',paddingBottom:'10px'}}>
            	<h4>Level</h4>
                  <div  className={this.state.level==0?'ui  button primary mini':'ui button mini'} onClick={()=>{this.setState({level:0})}} style={{borderRadius:'20px'}}>
                    Beginner
                  </div>
                  <div  className={this.state.level==1?'ui  button primary mini':'ui button mini'} onClick={()=>{this.setState({level:1})}} style={{borderRadius:'20px'}}>
                    Intermediate
                  </div>
                  <div  className={this.state.level==2?'ui  button primary mini':'ui button mini'} onClick={()=>{this.setState({level:2})}} style={{borderRadius:'20px'}}>
                    Advanced
                  </div>
                </div>

			</div>
			
            	
            	<button class="ui secondary button" onClick={() => this.createResponse()}>Create Quiz</button>

		
						
			</div>}
			</div>
			


			);
		}

	}


export default addQuestion;