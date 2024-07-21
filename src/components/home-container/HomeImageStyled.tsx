import styled from 'styled-components';

const HomeImageStyled = styled.img`
  width: 25vw;
  opacity: 0.8;
  animation: 5s ease 2s infinite alternate move-image;
  @media (max-width: 1024px) {
    display: none;
  }
  @keyframes move-image {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      transform: translate3d(-10px, -30px, 0);
    }
  }
`;

export default HomeImageStyled;
