import React, { Component } from "react";
import PersonList from "./components/persons/PersonList";
import Filter from "./components/Filter";
import withFetch from './hoc/withFetch';
import withFilter from './hoc/withFilter';

class App extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange = function(target) {
    this.props.handleChange && this.props.handleChange(target);
  };

  get getResults() {
    let results = this.props.filteredResults ?
        this.props.filteredResults(this.props.results) : this.props.results;

    return <PersonList results={results} />;
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-3">
            <Filter handleChange={this.handleChange} />
          </div>
          <div className="offset-md-1 col-md-4">{this.getResults}</div>
        </div>
      </div>
    );
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// export default withFilter()(App);
// export default withFetch(apiUrl)(App);
// export default withFetch(apiUrl)(withFilter()(App));
export default withFilter()(withFetch(apiUrl)(App));