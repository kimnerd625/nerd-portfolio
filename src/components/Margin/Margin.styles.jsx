import styled from "styled-components";

const MarginContainer = styled.div`
  // border: 1px solid yellow;
  height: ${(props) => props.size};

  @media (max-width: 600px) {
    height: 1rem;
  }
`;

export { MarginContainer };