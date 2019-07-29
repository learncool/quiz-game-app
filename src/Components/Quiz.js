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

			<button class="ui secondary button" style={{margin:'10px'}}>{this.props.part}</button>	  		
	      	<div style={{backgroundColor:'#aeb6bf',padding:'10px',margin:'10px'}}>
	      	<p>What is a Data-Structure</p>
	      		<div style={{borderRadius:'0 20px 20px 0',backgroundColor:' #fff',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Hello<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div style={{borderRadius:'0 20px 20px 0',backgroundColor:' #fff',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Hello<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div style={{borderRadius:'0 20px 20px 0',backgroundColor:' #fff',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Hello<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div style={{borderRadius:'0 20px 20px 0',backgroundColor:' #fff',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Hello<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      	
	      	</div>
			  


		
		</div>

  		)
  }
}

export default Quiz;