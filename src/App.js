import React, { Component } from "react";
import PersonList from "./components/persons/PersonList";
import Filter from "./components/Filter";
import withFetch from './hoc/withFetch';
import withFilter from './hoc/withFilter';

class App extends Component {
  state = {
    filter: ""
  };

  handleChange = ({ target }) => this.setState({ filter: target.value });

  get getResults() {
    let { filter } = this.state;
    let { results } = this.props;

    if (filter) {
      results = results.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
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

// export default withFetch(apiUrl)(App);
export default withFilter()(withFetch(apiUrl)(App));
