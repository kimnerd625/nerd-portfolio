import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  font-family: 'NanumSquare';
  justify-content: center;
`;

const CardImageContainer = styled.div`
  margin: 0.5rem 0;
  margin-right: 2rem;
  width: 6rem;
  height: 6rem;
`;
  
const CardImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`;
  
const CardDetailContainer = styled.div`
  margin: 0.5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardTitle = styled.div`
  color: ${(props) => props.theme.color.headerColor_100};
  font-family: 'NanumSquareEB';
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const CardDate = styled.span`
  color: ${(props) => props.theme.color.headerColor_300};
  font-size: 0.8rem;
  line-height: 1.6rem;
  margin-left: 0.75rem;
`;
  
const CardDescription = styled.h3`
  color: ${(props) => props.theme.color.headerColor_200};
  font-size: 0.9rem;
  line-height: 1.4rem;
`;

const CardAttribution = styled.h3`
  color: ${(props) => props.theme.color.headerColor_300};
  font-size: 0.8rem;
  line-height: 1.4rem;
`;
  
const CardSkill = styled.h3`
  color: ${(props) => props.theme.color.headerColor_300};
  font-size: 0.8rem;
  line-height: 1rem;
`;



export { 
  CardContainer, 
  CardImageContainer, 
  CardImage,
  CardDetailContainer,
  CardTitle,
  CardDate,
  CardDescription,
  CardAttribution,
  CardSkill, 
};