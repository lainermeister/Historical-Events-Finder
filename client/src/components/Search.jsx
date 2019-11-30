import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.props.queryHandler(event, this.state.query)}>
          <input
            type="text"
            value={this.state.query}
            onChange={({ target }) => this.setState({ query: target.value })}
          />
        </form>
      </div>
    );
  }
}

export default Search;
