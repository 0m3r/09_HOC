import React, { Component } from "react";

const withFetch = apiUrl => BaseComponent => {
  class WithFetchClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: []
      };
    }

    async componentDidMount() {
      const response = await fetch(apiUrl);
      const results = await response.json();
      this.setState({ results });
    }

    render() {
      return (
          <BaseComponent {...this.state} {...this.props} />
      );
    }
  }

  return WithFetchClass;
}

export default withFetch;