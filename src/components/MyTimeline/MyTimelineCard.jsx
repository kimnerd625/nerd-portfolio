import React from "react";

import { 
  CardContainer,
  CardShapeContainer,
  CardDetailContainer,
  CardDate,
  CardTitle,
  CardDescription, 
} from "../MyTimeline/MyTimelineCard.styles";

const MyTimelineCard = ({
  date,
  title,
  description,
}) => {
  return (
    <CardContainer>
      <CardShapeContainer/>
      <CardDetailContainer>
        <CardDate>
          {date}
        </CardDate>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardDetailContainer>
    </CardContainer>
  );
};

export default MyTimelineCard;