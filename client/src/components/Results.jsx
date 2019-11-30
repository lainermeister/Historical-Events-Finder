import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <thead>
          <th>Date</th>
          <th>Description</th>
        </thead>
        {this.props.currentResults.map((event) => {
          return (
            <tr>
              <td>{event.date}</td>
              <td>{event.description}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default Results;
