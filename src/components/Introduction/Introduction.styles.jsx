import styled from "styled-components";

const IntroductionContainer = styled.div`

`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileImageContainer = styled.div`
  margin: 1rem 1rem;
  width: 17rem;
  min-width: 17rem;
  height: 17rem;
  display: flex;
  border-radius: 3rem;
`;

const ProfileImage = styled.img`
  object-fit: contain;
  border-radius: 10rem;
`;

const ProfileTextContainer = styled.ul`
  // border: 1px solid yellow;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  // align-items: center;
  // justify-content: center;
  `;
  
const ProfileText = styled.li`
  color: ${(props) => props.theme.color.listColor};
  font-family: 'Bebas Neue';
  font-size: 1.5rem;
  line-height: 2.8rem;
  padding: 0 1rem;
`;

export { 
  IntroductionContainer, 
  PersonalInfo, 
  ProfileImageContainer, 
  ProfileImage, 
  ProfileText, 
  ProfileTextContainer, 
};