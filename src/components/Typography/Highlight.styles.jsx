import styled from "styled-components";

const HighlightText = styled.h2`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'NanumSquareEB';
  font-size: 1.6rem;
  line-height: 2rem;
  text-decoration-line: underline;
  text-decoration-thickness: 1.2rem;
  text-decoration-color: #fef5d4;
  text-underline-offset: -0.75rem;
`;

const HighlightTextContainer = styled.div`
  margin: 0.5rem 1rem;
  margin-bottom: 1.5rem;
`;

export {HighlightText, HighlightTextContainer};