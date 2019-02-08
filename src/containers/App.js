import React, { Component } from 'react';
//import logo from '../logo.svg';
//Components
import VueWeathers from '../components/VueWeaters/VueWeathers';
//Css
import '../css/App/App.css';

class App extends Component {
  render() {
    return (
      <div>
        App 
        <VueWeathers/>
      </div>
    );
  }
}

export default App;
