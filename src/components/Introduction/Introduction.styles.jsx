import styled from "styled-components";

const IntroductionContainer = styled.div`

`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ProfileImageContainer = styled.div`
  display: flex;
  margin: 1rem 1rem;
  width: 17rem;
  height: 17rem;
  border-radius: 3rem;

  @media (max-width: 600px) {
    max-width: 17rem;
    margin: 0rem 1rem;
  }
`;

const ProfileImage = styled.img`
  object-fit: contain;
  border-radius: 10rem;

  @media (max-width: 600px) {
    max-width: 17rem;
    max-height: 17rem;
    object-fit: cover;
  }
`;

const ProfileTextContainer = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;

  @media (max-width: 600px) {
    margin: 0rem 1rem;
  }
`;
  
const ProfileText = styled.li`
  color: ${(props) => props.theme.color.listColor};
  font-family: 'Work Sans';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8rem;
  padding: 0.5rem 1rem;

  & > span {
    font-weight: 700;
    margin-right: 0.75rem;
    padding: 0.25rem 0.5rem;
    background-color: #b9d0fc;
    border-radius: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 0.25rem 0rem;
  }
`;

export { 
  IntroductionContainer, 
  PersonalInfo, 
  ProfileImageContainer, 
  ProfileImage, 
  ProfileText, 
  ProfileTextContainer, 
};