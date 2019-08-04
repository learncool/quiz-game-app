import React, { Component } from 'react';
import Parts from './Components/Parts'
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
      showTopic:true,
      show_header: true
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick(topic) {
    this.setState({
      showComponent: true,
      showTopic:false,
      topicValue: topic
    });
  }

  backButtonHandler() {
    console.log(this.state.history.slice(-1)[0])
    setTimeout(() => this.setState({}), 500) 
  }


  shouldComponentUpdate() {return true}

  componentWillUpdate() {
    console.log("!!!!!!!!!", this.state)
  }

  componentWillMount() {

    // let resp = {
    //   "data": {
    //     "FetchApplicationData": {
    //       "data": "{\"_id\":\"5d40ff3a71660f202ef9e094\",\"_appId\":\"cjyq2pqca087r01286f5e6lvi\",\"topics\":[{\"_id\":1,\"kind\":\"topic\",\"name\":\"Data Science\",\"description\":\"Test Description\",\"image_url\":\"\",\"sub_topics\":[{\"kind\":\"topic\",\"name\":\"Data Science\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]},{\"kind\":\"topic\",\"name\":\"Data Science\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]}]},{\"_id\":2,\"kind\":\"topic\",\"name\":\"Stock Trades\",\"description\":\"Test Description\",\"image_url\":\"\",\"sub_topics\":[{\"kind\":\"topic\",\"name\":\"Data Science Stock Trades\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]},{\"kind\":\"topic\",\"name\":\"Data Science\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]}]},{\"_id\":3,\"kind\":\"topic\",\"name\":\"Python\",\"description\":\"Test Description\",\"image_url\":\"\",\"sub_topics\":[{\"kind\":\"topic\",\"name\":\"Data Science\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]},{\"kind\":\"topic\",\"name\":\"Data Science Python\",\"description\":\"Test Description\",\"image_url\":\"\",\"questions\":[{\"level\":0,\"_id\":1,\"question\":\"Which of the following is not a data-structure?\",\"mcq_options\":[\"Heap\",\"Hash\",\"BST\",\"Queue\"],\"correct_answer\":1,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":2,\"question\":\"Which of the following is also referred to as random variable?\",\"mcq_options\":[\"stochast\",\"aleatory\",\"eliette\",\"All of the Mentioned\"],\"correct_answer\":0,\"explanation\":\"Random variable is also known as stochastic variable.\"},{\"level\":0,\"_id\":3,\"question\":\"Which of the following is example use of Poisson distribution ?\",\"mcq_options\":[\"Analyzing contigency table data\",\"Modeling web traffic hits\",\"Incidence rates\",\"All of the Mentioned\"],\"correct_answer\":3,\"explanation\":\"Random variable is also known as stochastic variable.\"}]}]}]}",
    //       "error": false,
    //       "message": "Success"
    //     }
    //   }
    // }
    // this.setState({app_data: JSON.parse(resp.data.FetchApplicationData.data)})
    // console.log("pikachu",JSON.parse(resp.data.FetchApplicationData.data));

    if(this.props.fetchAppData) {
      this.props.fetchAppData().then(resp=>{
        this.setState({app_data: JSON.parse(resp.data.FetchApplicationData.data)})
      })
    }
  }


// rrender() {
//   return (
//     <div className="App">
//     <div className="ui">
//       <div  style={{"padding":"10px 16px","background":"#555","color":"#f1f1f1","position":"fixed","top":"0","width":"100%","zIndex":"1001"}}>
//       <h3>Stock Market Basics</h3>
//       <div className="ui divider"></div>
//       <h3>Advanced Level Quiz</h3>
//       </div>
//      <div>
//        <h4>Instructions</h4>
//        </div>

//     </div>
//     </div>
//   )
// }

  render() {
    console.log("state", this.state)
    return (
      <div className="App">
        {this.state.show_header && 
        <div className="App-header">
          <img src={"https://s3.ap-south-1.amazonaws.com/files.proconaiactr.com/quiz/quiz.png"} className="App-logo" alt="logo" style={{float:'left'}}/>

          {this.state.showTopic?null:
          <button onClick={()=>{this.setState({showTopic:true,showComponent:false})}} class="ui secondary button" style={{float:'right'}}>Back to Topic</button>}
          <h2>Lets Go</h2>
          <h4>Select Your Favourite topic and start the quiz</h4>

        </div>}
        {this.state.showTopic?
        <div className="AppBody">
          <button class="ui secondary button" style={{margin:'10px'}}>Select Your Topic</button>
       <div className="topics-list">
       {this.state.app_data && this.state.app_data.topics.map(topic => 
       
          <div  onClick={() => this._onButtonClick(topic.name)} style={{backgroundColor:' #f2f3f4',height:'100px',textAlign:'Left',padding:'10px',borderRadius:'20px',background:'linear-gradient(to right,  #cacfd2 ,#f2f3f4 50%,#f2f3f4 100%)',margin:'20px'}}>
          <img src="https://urlzs.com/C1qS2" style={{height:'80px',width:'80px',float:'right',borderRadius:'20px'}}/>
          <h3 className="App-intro">{topic.name}</h3>
          <p>{topic.description}</p>

          </div>
        )}
        </div>
        </div> : null}
            {this.state.showComponent ?<Parts app_data={this.state.app_data} 
            topic={this.state.topicValue} 
            toggleHeader={(toggle) => this.setState({show_header: toggle})}
            updateAppData={(data) => this.props.updateAppData(data)}
            showTopic={()=>this.setState({showComponent: false, showTopic: true})}
            showPart={() => 
              
              {console.log("!!")
              this.setState({showComponent: true, showTopic: false})}}
            sub_topics={this.state.app_data.topics.filter(topic=>topic.name===this.state.topicValue)[0].sub_topics}/>:null}
        
      </div>
    );
  }
}

export default App;
