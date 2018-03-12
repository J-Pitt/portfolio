import React, { Component } from 'react';
import './App.css';
import {AppContainer} from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://media.licdn.com/dms/image/C4E03AQF1k9tMSdqqCA/profile-displayphoto-shrink_200_200/0?e=1525996800&v=alpha&t=Juh-gYyFnLflm4JrzUo4LcScoE6R49uQQfm86RSp_fY' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Portfolio Site</h1>
        </header>
        <p className="App-intro">
          AdTech professional with over 3 years industry experience. Helping publishers and content creators optimize their advertising stack, creating efficient hybrid (client-side/server-side) header bidding solutions 
        </p>
      </div>
    );
  }
}

export default App;
