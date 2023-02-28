import styled from "styled-components";

const TitleContainer = styled.div`

`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'Work Sans';
  font-size: 3.75rem;
  line-height: 5rem;
  font-weight: 900;
  font-style: italic;
`;

export {TitleContainer, TitleText}