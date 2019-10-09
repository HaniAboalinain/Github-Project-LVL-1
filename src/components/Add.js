import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/js/dist/dropdown.js";

export default class Add extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <form style={{ marginLeft: "10px" }}>
          <div class="row">
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                placeholder="Repo Title"
              />
            </div>
            <div class="col-md-3">
              <input
                type="text"
                class="form-control"
                placeholder="Repo Language"
              />
            </div>

            <div class="dropdown">
              <a
                class="btn btn-secondary dropdown-toggle mr-3"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Repos Status
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Public
                </a>
                <a class="dropdown-item" href="#">
                  Private
                </a>
              </div>
              <button type="button" class="btn btn-success">
                Success
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
