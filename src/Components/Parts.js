import React, { Component } from 'react';
import quiz from '../quiz.png';
import image2 from '../image.png';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react';
import '../App.css';
import Quiz from './Quiz'

class Parts extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showPart: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }


	  _onButtonClick() {
    this.setState({
      showPart: true,
    });
  }


	render(){
		return(
			<div className="part">
			<div className="partBody">
			<button class="ui secondary button" style={{margin:'10px'}}>Select Part</button>
			    <Card.Group>
				   	 <div onClick={this._onButtonClick} style={{margin:'10px'}}>
				      <Card
				        image={quiz}
				        header='Topic-title'
				        meta='Friend'
				        description='Topic-Description.'
				      />
				      </div>
				      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
				      <Card
				        image="https://bit.ly/2t1qW8a"
				        header='Topic-title'
				        meta='Friend'
				        description='Topic-Description.'
				      />
				      </div>
				      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
				      <Card
				        image="https://bit.ly/2t1qW8a"
				        header='Topic-title'
				        meta='Friend'
				        description='Topic-Description.'
				      />
				      </div>
				      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
				      <Card
				        image={quiz}
				        header='Topic-title'
				        meta='Friend'
				        description='Topic-Description.'
				      />
				      </div>  
				</Card.Group>
    	</div>
    	<div className="partBody" style={{backgroundColor:' #f2f3f4',margin:'20px'}}>
            {this.state.showPart ?
           <Quiz /> :
           null
        }
        </div>
    	
    	</div>




			)
	}
}
export default Parts;


<h1>helli</h1>