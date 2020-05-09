import React, { Component } from "react";

const withFilter = () => (BaseComponent) {
  class WithFilterClass extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     results: []
    //   };
    // }

    // async componentDidMount() {
    //   const response = await fetch(apiUrl);
    //   const results = await response.json();
    //   this.setState({ results });
    // }

    render() {
      return (
          <BaseComponent {...this.state} {...this.props} />
      );
    }
  }

  return WithFilterClass;
}

export default withFilter;