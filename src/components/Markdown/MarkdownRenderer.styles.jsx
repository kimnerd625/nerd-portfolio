import styled from "styled-components";

const MarkdownContainer = styled.div`
  padding: 1rem;
`;

const MarkdownText = styled.div`
  font-family: 'NanumSquare';

  h1 {
    color: ${(props) => props.theme.color.headerColor_100};
    font-family: 'NanumSquareEB';
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin: 1rem 0;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h2 {
    color: ${(props) => props.theme.color.headerColor_200};
    font-family: 'NanumSquareB';
    font-size: 1.0rem;
    line-height: 1.4rem;
  }
  h3 {
    color: red;
  }
  strong {
    font-family: 'NanumSquareEB';
    text-decoration-line: underline;
    text-decoration-thickness: 1.2rem;
    text-decoration-color: #fef5d4;
    text-underline-offset: -0.9rem;
  }
`;


export { MarkdownContainer, MarkdownText };