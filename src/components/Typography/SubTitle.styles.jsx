import styled from "styled-components";

const SubTitleContainer = styled.div`
  // border: 1px solid green;
  margin: 1rem 1rem;

  @media (max-width: 600px) {
    margin: 0rem 1rem;
  }
`;

const SubTitleText = styled.h2`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'Work Sans';
  font-size: 2.75rem;
  line-height: 4rem;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export {SubTitleContainer, SubTitleText}