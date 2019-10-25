import React from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <HashRouter>
      <div>
        <Header />
        {routes}
      </div>
      </HashRouter>
    )
  }
}



export default App;
