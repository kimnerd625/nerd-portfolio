import React from "react";

import portfolioData from "../../portfolioData.json";
import SubTitle from "../Typography/SubTitle";
import MyTimelineCard from "./MyTimelineCard";

import { TimelineContainer } from "./MyTimeline.styles";

const MyTimeline = () => {

  const { timelines } = portfolioData;

  return(
  <TimelineContainer>
    <SubTitle>
      My Timelines
    </SubTitle>
    {timelines &&
      <>
        {timelines.map((timeline, index) => (
          <MyTimelineCard key={index} {...timeline}/>
        ))}
      </>
    }
  </TimelineContainer>
  );
};

export default MyTimeline;