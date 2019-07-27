import React, { Component } from 'react';
import quiz from '../quiz.png';
import image2 from '../image.png';
import data from '../data/data';
import Answers from './Answers';

import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react';
import '../App.css';

class Quiz extends Component {

	constructor(props) {
        super(props);
        this.state = {
            
        }
        
}


  render(){
  	return(
  		<div>
			  <button class="ui secondary button" style={{margin:'10px'}}>Start Quiz</button>

  		<div className="row" style={{backgroundColor:'  #a6acaf',height:'200px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right, #a6acaf,#f2f3f4 40%,#f2f3f4 100%)',margin:'20px'}}>
  		 	<p><strong>Q)</strong> : Question is</p>
  		 	<div >
			  <div  style={{height:'30px',padding:'6px',textAlign:'center',margin:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,rgb(24,243,244) 40%,rgb(100,100,179) 80%)'}}>Hello</div>
			  <div  style={{height:'30px',padding:'6px',textAlign:'center',margin:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,rgb(24,243,244) 40%,rgb(100,100,179) 80%)'}}>Hello</div>
			  <div  style={{height:'30px',padding:'6px',textAlign:'center',margin:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,rgb(24,243,244) 40%,rgb(100,100,179) 80%)'}}>Hello</div>
			  <div  style={{height:'30px',padding:'6px',textAlign:'center',margin:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,rgb(24,243,244) 40%,rgb(100,100,179) 80%)'}}>Hello</div>
			</div>

         
		</div>
		</div>

  		)
  }
}

export default Quiz;