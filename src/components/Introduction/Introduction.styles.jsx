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
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  justify-content: center;
`;
  
const ProfileText = styled.li`
  color: ${(props) => props.theme.color.listColor};
  font-family: 'Work Sans';
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
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