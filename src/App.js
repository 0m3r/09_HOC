import React, { Component } from "react";
import PersonList from "./components/persons/PersonList";
import Filter from "./components/Filter";
import withFetch from './hoc/withFetch';
import withFilter from './hoc/withFilter';

class App extends Component {

  get getResults() {
    return <PersonList results={this.props.filteredResults()} />;
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3">
            <Filter handleChange={this.props.handleChange} />
          </div>
          <div className="offset-md-1 col-md-4">{this.getResults}</div>
        </div>
      </div>
    );
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export default withFetch(apiUrl)(withFilter()(App));