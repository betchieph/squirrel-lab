import React from 'react';
import './App.css';
import Squirrel from './Components/Squirrel.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.State={
        squirrels:[],
    }
  }
  
  // add a componentDidMount lifecycle method to fetch data from the API
componentDidMount = () => {
    let appToken = 'z49aiCMrMqcYtlMQFT8Q3TgpU'
    let query = `https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=${appToken}&running=true`
    fetch(query)
    .then(response => response.json())
    .then(data => {console.log(data)
        this.setState(state => {
            state.squirrels=data
            return state
        })
    })
    .catch(e => {console.log(e);
    })
}
  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h3>there are currently {this.state.squirrels.length} </h3>
        {this.state.squirrels.map(squirrel => <Squirrel data={squirrel}/>)}
        
      </div>
    );
  }
}

export default App;
