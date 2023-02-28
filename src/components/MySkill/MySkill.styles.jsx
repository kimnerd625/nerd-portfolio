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

const MySkillContainer = styled.div`
  
`;

const HexagonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  transform: translateX(-5%);
`;

const HexagonCardArea = styled.div`
  display: flex;
  flex-direction: row;
  
  &:nth-child(2) {
    transform: translateY(-15%);
  }

  &:nth-child(3) {
    transform: translateY(-30%);
  }

  &:nth-child(4) {
    transform: translateY(-45%);
  }
`;

const HexagonCard = styled.div`
  width: 8rem;
  height: 8rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.color};
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  font-size: 1.4rem;
  color: ${(props) => props.theme.color.headerColor_100};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  align-items: center;

  &: hover {
    animation: ${blink} 1s linear infinite;
  }
`;

const HexagonImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
`;

export { 
  MySkillContainer,
  HexagonContainer,
  HexagonCardArea,
  HexagonCard,
  HexagonImage,
};