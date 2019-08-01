import React, { Component } from 'react';
import Quiz from './Quiz';
import AddQuestion from './addQuestion';
import '../App.css';


class Parts extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showPart: true,
      isMentor: true

    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
	  _onButtonClick(sub_topic) {
			console.log(sub_topic)
    this.setState({
      showPart: false,
			partValue: sub_topic.name,
			questions: sub_topic.questions
    });
	}

	render(){
		console.log("parts props are",this.props);
		return(
			<div className="part">
			{this.state.showPart?
			<div className="AppBody">

			  <button class="ui secondary button" style={{margin:'10px'}}>{this.props.topic}</button>

				{this.props.sub_topics.map(sub_topic =>   <div  onClick={() => this._onButtonClick(sub_topic)} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
	          <img src="https://urlzs.com/E46Sm" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          	  <h3 className="App-intro text-wrap">{sub_topic.name}</h3>
	          <p>{sub_topic.description}</p>
	          </div>)}
	        </div>: this.state.isMentor ?<AddQuestion/>:<Quiz 
					topic={this.props.topic}
					part={this.state.partValue}
					questions={this.state.questions}
					/>
					}
		   
		    </div>




			)
	}
}
export default Parts;


