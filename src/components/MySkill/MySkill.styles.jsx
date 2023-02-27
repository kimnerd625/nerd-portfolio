import styled from "styled-components";

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
`;

const HexagonCard = styled.div`
  width: 9rem;
  height: 9rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.color.highlightColor_100};
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  font-size: 1.4rem;
  color: ${(props) => props.theme.color.headerColor_100};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  align-items: center;
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