import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  animation: ${fadeIn} 1.2s;
  animation: ${fadeOut} 1.2s;
`;

const PreviewImage = styled.img`
  max-height: 0px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer;
  z-index: 999;
  .icon {
    font-size: 2rem;
    color: ${(props) => props.theme.color.modalColor}
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1.4rem;
    }
  }
`;

export {
  ImageContainer,
  Image,
  PreviewImage,
  ButtonContainer,
  Button,
};