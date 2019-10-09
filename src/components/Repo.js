import React, { Component } from 'react';
import Table from "./Table"

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Repo extends Component {



  render() {
    const TableStyle = {

      border: "1px black solid "
    
    
    }
    return (
      <div >
        <Table style={this.TableStyle} />
        
       

      </div>
    );
  }
  
}

