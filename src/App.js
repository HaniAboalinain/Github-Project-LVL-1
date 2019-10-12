import React, { Component } from 'react';
import Add from "./components/Add.js"
import Table from "./components/Table"
// import uuid from "uuid";


import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  state = {
    repos: [
      {
        id: "1",
        title: 'Array',
        status: 'Private',
        language: 'HTML',
        isPrivate: 'Yes'
      },
      {
        id: "2",
        title: 'Object',
        status: 'Public',
        language: 'JavaScript',
        isPrivate: 'No'
        
      },
      {
        id: "3",
        title: 'If statement',
        status: 'Public',
        language: 'React js',
        isPrivate: 'No'
        
      },
      {
        id: "4",
        title: 'for loop',
        status: 'Private',
        language: 'C#',
        isPrivate: 'Yes'
        
      }
    ]
  };

    delrepo = (id) =>{
      console.log(id);

      this.setState({repos :  this.state.repos.filter( repo => repo.id !== id )});
    }


    addRepo = (repo) => {
      repo.id = this.state.repos.length + 1;
       let newRepo = this.state.repos;
       newRepo.push(repo);
      this.setState({
        repos: newRepo
      });
    };


  render() {
    const {repos} = this.state;
    const {delrepo , addRepo} = this;

    return (
      <div className="container">
        
        <Add addRepo={addRepo}/>

        <Table reposInfo={repos} delrepo={delrepo}/>
      </div>
    );
  }
}
