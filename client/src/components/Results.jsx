import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import clean from "../cleanText";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Timeline>
        {this.props.currentResults.map((event) => {
          return (
            <TimelineItem
              dateText={clean.date(event.date)}
              style={{ color: "#337ab7", background: "#337ab7" }}
            >
              <td>{clean.description(event.description)}</td>
            </TimelineItem>
          );
        })}
      </Timeline>
    );
  }
}

export default Results;
