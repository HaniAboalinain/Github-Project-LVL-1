import React, { Component } from 'react';
import Add from "./components/Add.js"
import Repos from "./components/Repo"


import 'bootstrap/dist/css/bootstrap.min.css';
import Repo from './components/Repo';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        title: 'Array',
        status: 'Private',
        language: 'HTML'
      },
      {
        id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'
      }
    ]
  };
  render() {
    return (
      <div style={{  }}>
        
        <Add/>

        <Repos/>
      </div>
    );
  }
}
