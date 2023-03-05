import React from "react";

import portfolioData from "../../portfolioData.json";
import Margin from "../Margin/Margin";
import SubTitle from "../Typography/SubTitle";
import Highlight from "../Typography/Highlight";
import MarkdownRenderer from "../Markdown/MarkdownRenderer";

import { 
  IntroductionContainer, 
  PersonalInfo, 
  ProfileImage, 
  ProfileImageContainer, 
  ProfileText,
  ProfileTextContainer,
  ListContent,
  ModalLink,
  Link, 
} from "./Introduction.styles";

const Introduction = ({setIsNerdOpened}) => {

  const {
    introduction: { name, nickName, email, githubUrl, blogUrl, },
  } = portfolioData;

  const imgUrl = "/avatar.gif";

  const handleClick = () => {
    setIsNerdOpened(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <IntroductionContainer>
      <SubTitle>About Me</SubTitle>
      <PersonalInfo>
        <ProfileImageContainer>
          <ProfileImage src={imgUrl}/>
        </ProfileImageContainer>
        <ProfileTextContainer>
          <Highlight>
            김지훈
          </Highlight>
          <ProfileText>
            <ListContent>Nickname</ListContent>
            <ModalLink
              type='button'
              onClick={() => handleClick()}
            >
              {nickName}
            </ModalLink>
          </ProfileText>
          <ProfileText>
            <ListContent>Email</ListContent>
            <Link href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jihunkim625@yonsei.ac.kr'>{email}</Link>
          </ProfileText>
          <ProfileText>
            <ListContent>GitHub</ListContent>
            <Link href="https://github.com/kimnerd625">{githubUrl}</Link>
          </ProfileText>
          <ProfileText>
            <ListContent>Blog</ListContent>
            <Link href="https://kimnerd.tistory.com">{blogUrl}</Link>
          </ProfileText>
        </ProfileTextContainer>
      </PersonalInfo>
      <Margin size='1rem' />
      <MarkdownRenderer />
    </IntroductionContainer>
  );
}

export default Introduction;