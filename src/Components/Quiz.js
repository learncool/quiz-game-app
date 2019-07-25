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
  		 <div className="row">
  		 	<button class="ui secondary button">Start Quiz</button>	
  		 	<div className="question" style={{margin:'10px',backgroundColor:'#cacfd2'}}>
  		 	<a class="ui label" style={{margin:'10px'}}>
			  <img src="/images/avatar/small/elliot.jpg" class="ui avatar right spaced image" />
			  Question 1/2
			</a>
			<p>Array sorting algroithms are?</p>
  		 	</div>
  		 	<div class="ui divided three column grid">
				  <div class="row">
				    <div class="column">
				      <div style={{backgroundColor:'#cacfd2',marginLeft:'10px'}}>
				      A:Bubble Sort
				      </div>
				    </div>
				    <div class="column">
				      <div style={{backgroundColor:'#cacfd2',marginLeft:'10px'}}>
				      B:Quick Sort
				      </div>
				    </div>
				   </div>
				   <div class="row">
				    <div class="column">
				      <div style={{backgroundColor:'#cacfd2',marginLeft:'10px'}}>
				      C:Merge Sort
				      </div>
				    </div>
				    <div class="column">
				      <div style={{backgroundColor:'#cacfd2',marginLeft:'10px'}}>
				      D:Heap Sort
				      </div>
				    </div>
				   </div>
				</div>
                    
		</div>

  		)
  }
}

export default Quiz;