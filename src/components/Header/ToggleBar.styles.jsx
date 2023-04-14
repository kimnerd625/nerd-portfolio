import styled from "styled-components";

const ToggleBarSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;

const ToggleBarContainer = styled.div`
  margin: 0 2rem;
`;  

const ThemeButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.6rem;
  background-color: ${props => props.theme.color.skyColor};
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

export { 
  ToggleBarContainer, 
  ToggleBarSection,
  ThemeButton,
  ButtonImage, 
};