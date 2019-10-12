import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/dist/dropdown.js";

export default class Add extends Component {
  state = {
    title: "",
    language: "",
    status: ""
  };

  onChange = e => this.setState({ 
    [e.target.name]: e.target.value
   });

  //  onSubmit = e => {
  //    e.preventDefault();
  //    this.props.addRepo(this.state);
  //    this.setState({
  //     title: "",
  //     status: "",
  //     language: ""
  //   });
  //  }

  AddNewRepo = () => {
    this.props.addRepo(this.state);
    this.setState({
      title: "",
      status: "",
      language: ""
    });
  };

  render() {
    return (
      
      <div style={{ marginTop: "10px" }}>
        <form style={{ marginLeft: "10px" }} onSubmit="">
          <div className="row">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Repo Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Repo Language"
                name="language"
                value={this.state.language}
                onChange={this.onChange}
              />
            </div>

            {/* <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle mr-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onChange={this.onChange}
              >
                Repos Status
              </a> */}

              {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <option className="dropdown-item" href="#"
                 name='public'
                 value = {this.state.status}
                 onChange = {this.onChange}
                >
                  Public
                </option>
                <option className="dropdown-item" href="#"
                  name='private'
                  value = {this.state.status}
                  onChange = {this.onChange}
                >
                  Private
                </option>
              </div> */}
              










              <select
                defaultValue="Default"
                name="status"
                onChange={this.onChange}
              > 
                <option value="Default" disabled> Repo Status </option>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>

              <button
                type=""
                className="btn btn-success"
                onClick={this.AddNewRepo}
              >
                Add Repo
              </button>
            </div>
          {/* </div> */}
        </form>
      </div>
    );
  }
}
