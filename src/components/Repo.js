import React, { Component } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

export default class Repo extends Component {



  render() {
    console.log(this.props.reposInfo);

    const {key , id, title , status , isPrivate , language , delrepo} = this.props;
    return (

    <tr key= {key} >
      <th scope="row">{id}</th> 
      <td >{title}</td>
      <td>{status}</td>
      <td>{isPrivate}</td>
      <td><input type="checkBox"></input></td>
      <td>{language}</td>
      <td><button className = "btn btn-danger " onClick={delrepo.bind(this,id )} >Delete</button></td>
      

    </tr>
 
    );
  }
  
}

