import styled, {keyframes} from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1.5rem);
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    transform: translateX(-10%);
  }
`;

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
  top: calc(${(props) => `${props.height}px`} + 14rem);
  left: 0;
  right: 0;
  margin: auto;
  max-width: 750px;
  width: 60rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;
  transform: translateX(-10%);
  animation: ${appear} 1s;

  @media (max-width: 600px) {
    transform: translateX(0%);
    width: 95%;
    padding: 0.5rem;
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

export { Wrapper, ModalContainer, ButtonContainer, CancleButton, };