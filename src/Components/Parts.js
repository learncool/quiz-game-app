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
      showPart: true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }


	  _onButtonClick() {
    this.setState({
      showPart: false,
      partValue: "Python"
    });
  }


	render(){
		return(
			<div className="part">
			{this.state.showPart?
			<div className="AppBody">

			  <button class="ui secondary button" style={{margin:'10px'}}>{this.props.topic}</button>
	          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
	          <img src="https://urlzs.com/E46Sm" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          	  <h3 className="App-intro">Python</h3>
	          <p>Description is description</p>
	          </div>
	          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
	          <img src="https://urlzs.com/MV2U4" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          	  <h3 className="App-intro">Numpy</h3>
	          <p>Description is description</p>
	          </div>
	          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
	          <img src="https://urlzs.com/MV2U4" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          	  <h3 className="App-intro">Matplotlib</h3>
	          <p>Description is description</p>
	          </div>
	        </div>:<Quiz part={this.state.partValue}/>}
		   
		    </div>




			)
	}
}
export default Parts;


<h1>helli</h1>