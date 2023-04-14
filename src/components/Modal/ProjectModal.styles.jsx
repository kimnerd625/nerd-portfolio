import styled from 'styled-components';

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
  width: 60rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 12px;

  @media (max-width: 600px) {
    transform: translateX(0%);
    width: 95%;
    padding: 0.5rem;
    top: calc(${(props) => `${props.height}px`} + 12rem);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CancelButton = styled.div`
  cursor: pointer;

  .icon {
    font-size: 1.6rem;
    color: ${(props) => props.theme.color.modalColor}
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1.2rem;
    }
  }
`;
  
const GitHubButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon {
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.modalColor}
  }

  @media (max-width: 600px) {
    .icon {
      font-size: 1.2rem;
    }
  }
`;

const ButtonText = styled.h2`
  font-family: 'Work Sans';
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.modalColor};
  padding-right: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;


export {
  Wrapper,
  ModalContainer,
  ButtonContainer,
  CancelButton,
  GitHubButton,
  ButtonText,
};