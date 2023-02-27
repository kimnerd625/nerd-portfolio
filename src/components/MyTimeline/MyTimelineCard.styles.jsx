import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: row;
`;

const CardShapeContainer = styled.div`
  position: relative;
  border-left: 3px solid ${(props) => props.theme.color.lineColor};

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 2.1rem;
    left: -0.55rem;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.color.buttonColor};
    border-radius: 10rem;
  } 
`;

const CardDetailContainer = styled.div`
  margin: 1rem;
`;

const CardDate = styled.div`
  margin: 0.75rem 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.color.buttonColor};
  color: #fff;
`;

const CardTitle = styled.div`

`;

const CardDescription = styled.div`

`;

export { CardContainer, CardShapeContainer, CardDetailContainer, CardDate, CardTitle, CardDescription };