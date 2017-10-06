import React, {Component} from 'react';
import {Link} from "react-router-dom";
class App extends Component {

  render() {

    return (
      <div>
        APPAUTH
        <Link to={`/register`}>
          Registration
        </Link>
      </div>
    )
  }
}

export default App;
