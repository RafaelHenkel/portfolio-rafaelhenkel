import styled from 'styled-components';

const HomeContainerStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  span {
    animation: 2s ease infinite move-animation;
    transform-origin: 70% 70%;
    font-size: 1.5rem;
    @keyframes move-animation {
      0% {
        transform: rotate(0);
      }
      10% {
        transform: rotate(14deg);
      }
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(0);
      }
    }
  }
  div {
    display: flex;
    @media (max-width: 768px) {
      align-items: center;
    }
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default HomeContainerStyled;
