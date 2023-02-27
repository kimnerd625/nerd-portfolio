import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    background-color: #b3eaf5;
  }
  33% {
    background-color: #e4bdf8;
  }
  66% {
    background-color: #b9d0fc;
  }
  100% {
    background-color: #b3eaf5;
  }
`

const CardShapeContainer = styled.div`
  margin-left: 1rem;
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
margin: 1rem 1.5rem;
`;

const CardDate = styled.button`
margin: 0.75rem 0;
padding: 0.25rem 0.5rem;
border-radius: 0.5rem;
background-color: ${(props) => props.theme.color.buttonColor};
color: #fff;
`;

const CardTitle = styled.div`
  font-family: 'NanumSquareEB';
  color: ${(props) => props.theme.color.headerColor_100};
`;
  
const CardDescription = styled.div`
  font-family: 'NanumSquareB';
  color: ${(props) => props.theme.color.headerColor_200};
`;
  
const CardContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: row;

  &:hover ${CardShapeContainer}{  
    &::after {
      animation: ${blink} 1s linear infinite;
    }
  }

  &:hover ${CardDate}{
    animation: ${blink} 1s linear infinite;
  }
`;

  export { CardContainer, CardShapeContainer, CardDetailContainer, CardDate, CardTitle, CardDescription };