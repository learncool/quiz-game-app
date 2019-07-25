import React, { Component } from 'react';
import quiz from './quiz.png';
import image2 from './image.png';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react';
import './App.css';
import Parts from './Components/Parts'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  renderItems(){
  const src = 'https://placeimg.com/640/480/arch'
  var news=[0,1,2,3,4,5,6,7];
  return news.map((item) =>(
    <Card.Group>
      <Card
        image={quiz}
        header='Topic-title'
        meta='Friend'
        description='Topic-Description.'
      />
    </Card.Group>

  ));
}


  render() {

    return (
      <div className="App">
        <div className="App-header">

          <img src={quiz} className="App-logo" alt="logo" style={{float:'left'}}/>
          <h2>Lets Go</h2>
          <h4>Select Your Favourite topic and start the quiz</h4>
        </div>


        <div className="App-body" style={{backgroundColor:' #f2f3f4',margin:'20px'}}>
        <p className="App-intro">
        <button class="ui secondary button">Choose Your Topic</button>
        </p>

            
    <Card.Group>
    <div onClick={this._onButtonClick} style={{margin:'10px'}}>
    
      <Card
        image="https://urlzs.com/yoMau"
        header='Topic-title'
        meta='Friend'
        description='Topic-Description.'
      />
      </div>
      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
      <Card
        image="https://bit.ly/2Yuc1E4"
        header='Topic-title'
        meta='Friend'
        description='Topic-Description.'
      />
      </div>
      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
      <Card
        image={image2}
        header='Topic-title'
        meta='Friend'
        description='Topic-Description.'
      />
      </div>
      <div onClick={this._onButtonClick} style={{margin:'10px'}}>
      <Card
        image="https://bit.ly/2K2PFjP"
        header='Topic-title'
        meta='Friend'
        description='Topic-Description.'
      />
      </div>  
    </Card.Group>
    <br/><br/>  
    <hr/>

    
        </div>
        <div className="partBody" style={{backgroundColor:' #f2f3f4',margin:'20px'}}>
            {this.state.showComponent ?
           <Parts /> :
           null
        }
        </div>
      </div>
    );
  }
}

export default App;
