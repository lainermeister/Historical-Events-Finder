import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import clean from "../cleanText";
const Results = ({ currentResults }) => (
  <Timeline>
    {currentResults.map((event) => {
      return (
        <TimelineItem
          dateText={clean.date(event.date)}
          style={{ color: "#e86971" }}
        >
          <td>{clean.description(event.description)}</td>
        </TimelineItem>
      );
    })}
  </Timeline>
);

export default Results;
