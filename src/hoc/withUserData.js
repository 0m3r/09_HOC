import { lifecycle } from "recompose";
import fetchData from "../fetchData";

const withUserData = lifecycle({
  componentDidMount() {
    fetchData().then(data => this.setState(data));
  }
});

export default withUserData;
