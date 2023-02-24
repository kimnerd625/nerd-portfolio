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
  margin: 1rem 1rem;
  border: 1px solid yellow;
  `;
  
  const ProfileText = styled.li`
  font-size: 1.4rem;
`;

export { 
  IntroductionContainer, 
  PersonalInfo, 
  ProfileImageContainer, 
  ProfileImage, 
  ProfileText, 
  ProfileTextContainer, 
};