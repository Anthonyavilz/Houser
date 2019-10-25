import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Dashboard />
        <Wizard />
        <Header />
      </div>
    )
  }
}



export default App;
