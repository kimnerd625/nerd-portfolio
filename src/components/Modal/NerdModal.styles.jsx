import styled, {keyframes} from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const blinkText = keyframes`
  0% {
    color: #b3eaf5;
  }
  33% {
    color: #e4bdf8;
  }
  66% {
    color: #b9d0fc;
  }
  100% {
    color: #b3eaf5;
  }
`

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 2560px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: calc(${(props) => `${props.height}px`} + 4rem);
  left: 0;
  right: 0;
  margin: auto;
  max-width: 750px;
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  animation: ${appear} 1s;

  @media (max-width: 600px) {
    transform: translateX(0%);
    width: 95%;
    padding: 0.5rem;
    top: calc(${(props) => `${props.height}px`} + 8rem);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CancleButton = styled.div`
  cursor: pointer;

  .icon {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color.headerColor_200}
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1.2rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.5rem;
`;

const TitleText = styled.h2`
  color: ${(props) => props.theme.color.titleColor};
  font-family: 'NanumSquareEB';
  font-size: 2rem;
  line-height: 3rem;
  // padding-bottom: 0.5rem;
  // border-bottom: 1px dashed ${(props) => props.theme.color.titleColor};
  animation: ${blinkText} 1s linear infinite;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const ContentText = styled.h3`
  color: ${(props) => props.theme.color.headerColor_200};
  font-family: 'NanumSquareR';
  font-size: 1.1rem;
  line-height: 2.4rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export { 
  Wrapper, 
  ModalContainer, 
  ButtonContainer, 
  CancleButton, 
  ContentContainer, 
  TitleText, 
  ContentText, 
};