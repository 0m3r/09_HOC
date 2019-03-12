import React, { Component } from "react";
import PersonList from "./components/persons/PersonList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    results: [],
    filter: ""
  };

  async componentDidMount() {
    const r = await fetch("https://swapi.co/api/people/?format=json");
    const { results } = await r.json();
    this.setState({ results });
  }

  handleChange = ({ target }) => this.setState({ filter: target.value });

  get getResults() {
    let { results, filter } = this.state;
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

export default App;
