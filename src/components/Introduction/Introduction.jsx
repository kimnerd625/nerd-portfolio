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
  Link, 
} from "./Introduction.styles";

const Introduction = () => {

  const {
    introduction: { name, nickName, email, githubUrl, blogUrl, },
  } = portfolioData;

  const imgUrl = "/avatar.gif";

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
            <span>Nickname</span>
            <Link></Link>{nickName}
          </ProfileText>
          <ProfileText>
            <span>Email</span>
            <Link href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jihunkim625@yonsei.ac.kr'>{email}</Link>
          </ProfileText>
          <ProfileText>
            <span>GitHub</span>
            <Link href="https://github.com/kimnerd625">{githubUrl}</Link>
          </ProfileText>
          <ProfileText>
            <span>Blog</span>
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