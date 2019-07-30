import React, { Component } from 'react';
import '../App.css';

class Quiz extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	green:false,
        	right:2,
            
        }
        
}

changeColor(){
	var el = document.getElementById(`${this.state.right}`);
  	console.log("dlkfa",el);
	el.classList.remove("whiteButton");
	el.classList.add("greenButton");

	console.log("dkfjdl",document.getElementById('2'));
    this.setState({green: !this.state.green})
}




  render(){
  
  	return(
  		<div>

			<button class="ui secondary button" style={{margin:'10px'}}>{this.props.part}</button>	  		
	      	<div style={{backgroundColor:'#aeb6bf',padding:'10px',margin:'10px'}} onClick={this.changeColor.bind(this)}>
	      	<p>Which of the following is not a data-structure?</p>
	      		<div id='1' className="whiteButton" style={{borderRadius:'0 20px 20px 0',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Heap<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div id='2' className="whiteButton" style={{borderRadius:'0 20px 20px 0',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Hash<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div id='3' className="whiteButton" style={{borderRadius:'0 20px 20px 0',paddingTop:'6px',marginTop:'10px',height:'30px'}}>BST<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      		<div id='4' className="whiteButton" style={{borderRadius:'0 20px 20px 0',paddingTop:'6px',marginTop:'10px',height:'30px'}}>Queue<i style={{float:'right'}} aria-hidden="true" class="chevron circle right icon"></i></div>
	      	
	      	</div>

		</div>

  		)
    		}
  }


export default Quiz;