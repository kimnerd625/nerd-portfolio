import React from "react";

import { 
  CardContainer, 
  CardImageContainer,
  CardImage,
  CardDetailContainer,
  CardTitle,
  CardDate,
  CardDescription,
  CardAttribution,
  CardSkill, 
} from "./MyProjectCard.styles";

const MyProjectCard = ({
  title,
  description,
  date,
  attribution,
  skills,
  imgUrl,
}) => {

  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage
          src={imgUrl}
          alt={`${title} 썸네일 이미지`}
        />
      </CardImageContainer>
      <CardDetailContainer>
        <CardTitle>
          {title}
          <CardDate>
            {date}
          </CardDate>
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <CardAttribution>
          {attribution}
        </CardAttribution>
        <CardSkill>
          {skills}
        </CardSkill>
      </CardDetailContainer>
    </CardContainer>
  );
};

export default MyProjectCard;