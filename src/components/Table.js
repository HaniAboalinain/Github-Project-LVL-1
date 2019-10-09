import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Table extends Component {
  render() {
    return (
      <div style={{ border: '3px' }} class="mt-3">
        <table class="table">
  <caption>List of Repos</caption>
  <thead>
    <tr>
      <th scope="col">Number </th>
      <th scope="col">Title</th>
      <th scope="col">Repos Status</th>
      <th scope="col">Check</th>
      <th scope="col">is Private</th>
      <th scope="col">Language</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><input type="checkBox" ></input></td>
      <td>Otto</td>
      <td><button class = "btn btn-danger ">Delete</button></td>
      

    </tr>
    

    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><input type="checkBox" ></input></td>
      <td>Otto</td>
      <td><button class = "btn btn-danger ">Delete</button></td>
      

    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><input type="checkBox" ></input></td>
      <td>Otto</td>
      <td><button class = "btn btn-danger ">Delete</button></td>
      

    </tr>
  </tbody>
</table>
       
      </div>
    );
  }
}
