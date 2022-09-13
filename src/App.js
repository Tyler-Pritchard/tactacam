import React, { Component } from "react";
import {Home} from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";

{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;