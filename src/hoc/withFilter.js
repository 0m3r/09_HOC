import React, { Component } from "react";

const withFilter = () => BaseComponent => {
  class WithFilterClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: ''
      };
    }

    handleChange = ({ target }) => this.setState({ filter: target.value });

    filteredResults = (results) => {
      results = results || [];
      let { filter } = this.state;

      if (filter) {
        results = results.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return results;
    };

    render() {
      return (
          <BaseComponent
            {...this.props}
            {...this.state}
            handleChange={this.handleChange}
            filteredResults={this.filteredResults}
          />
      );
    }
  }
  return WithFilterClass;
}

export default withFilter;