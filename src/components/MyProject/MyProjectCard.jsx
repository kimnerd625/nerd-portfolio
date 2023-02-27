import React from "react";

import { 
  CardContainer, 
  CardImageContainer, 
  CardDetailContainer,
  CardTitle,
  CardDescription,
  CardSkill, 
} from "./MyProjectCard.styles";

const MyProjectCard = ({
  title,
  description,
  date,
  attribution,
  skills, 
}) => {

  return (
    <CardContainer>
      <CardImageContainer>

      </CardImageContainer>
      <CardDetailContainer>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <CardSkill>
          {skills}
        </CardSkill>
      </CardDetailContainer>
    </CardContainer>
  );
};

export default MyProjectCard;