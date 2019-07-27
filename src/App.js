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
      showTopic:true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
      showTopic:false
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

          {this.state.showTopic?null:
          <button onClick={()=>{this.setState({showTopic:true,showComponent:false})}} class="ui secondary button" style={{float:'right'}}>Back to Topic</button>}
          <h2>Lets Go</h2>
          <h4>Select Your Favourite topic and start the quiz</h4>

        </div>
        {this.state.showTopic?
        <div className="AppBody">
          <button class="ui secondary button" style={{margin:'10px'}}>Select Your Topic</button>
          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
          <img src="https://urlzs.com/C1qS2" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          <h3 className="App-intro">Data-Science</h3>
          <p>Description is description</p>

          </div>
          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
          <img src="https://urlzs.com/o986H" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>          
          <h3 className="App-intro">Mathematics</h3>
          <p>Description is description</p>
          </div>
          <div  onClick={this._onButtonClick} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
          <img src="https://urlzs.com/yRzSt" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>          
          <h3 className="App-intro">Virtual Reality</h3>
          <p>Description is description</p>
          </div>
        </div>
        :null}

            {this.state.showComponent ?<Parts />:null}
        
      </div>
    );
  }
}

export default App;
