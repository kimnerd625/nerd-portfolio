import styled from "styled-components";

const MarkdownContainer = styled.div`
  padding: 1rem;
`;

const MarkdownText = styled.div`
  font-family: 'Nanum Gothic';

  h1 {
    color: ${(props) => props.theme.color.headerColor};
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin: 1rem 0;
  }
  h2 {
    font-size: 1.1rem;
    line-height: 1.4rem;
    font-weight: 600;
  }
  h3 {
    color: red;
  }
  strong {
    color: red;
  }
`;


export { MarkdownContainer, MarkdownText };