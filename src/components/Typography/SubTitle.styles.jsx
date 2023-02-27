import styled from "styled-components";

const SubTitleContainer = styled.div`
  // border: 1px solid green;
  margin: 1rem 1rem;
`;

const SubTitleText = styled.h2`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'Bebas Neue';
  font-size: 2.75rem;
  line-height: 4rem;
  font-weight: 500;
`;

export {SubTitleContainer, SubTitleText}