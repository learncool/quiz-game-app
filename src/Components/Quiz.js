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
      <div style={{background:'#222',color:'white',border:'1px solid grey'}}>

        <button class="ui secondary button" style={{margin:'10px'}}>Start Quiz</button>

      <div className="row" style={{textAlign:'center',background:'#222'}}>
        <p>Question 1 of 10</p>
        <strong><h2>Which one is not a sorting algorithm?</h2></strong>
        <div >
        <div  style={{padding:'10px',border:'1px solid',textAlign:'center',margin:'10px',background:'#222'}}>Quick Sort</div>
        <div  style={{padding:'10px',border:'1px solid',textAlign:'center',margin:'10px',background:'#222'}}>Merge Sort</div>
        <div  style={{padding:'10px',border:'1px solid',textAlign:'center',margin:'10px',background:'#222'}}>Heap Sort</div>
        <div  style={{padding:'10px',border:'1px solid',textAlign:'center',margin:'10px',background:'#222'}}>Hash Sort</div>
      </div>

         
    </div>
    </div>

      )
  }
}

export default Quiz;