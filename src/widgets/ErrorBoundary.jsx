
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }

  state = { error: "" };

  componentDidCatch(error) {
    this.setState({
      error: `${error.name}: ${error.message} \n ${
        error.stack
      }\n${JSON.stringify(error)}`,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <div>{error}</div>;
    } else {
      return <>{this.props.children}</>;
    }
  }
}
export default ErrorBoundary;