import styled from "styled-components";

const TitleContainer = styled.div`

`;

const TitleText = styled.h1`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'Monoton';
  font-size: 3.75rem;
  line-height: 5rem;
`;

export {TitleContainer, TitleText}