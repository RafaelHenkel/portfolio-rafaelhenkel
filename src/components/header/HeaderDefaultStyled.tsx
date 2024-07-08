import styled from 'styled-components';

const HeaderDefaultStyled = styled.header`
  background-color: #020617;
  position: fixed;
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  z-index: 99999;
  .text-effect {
    position: relative;
    font-weight: 700;
    font-size: 1.3rem;
    color: #ffffff;
    top: 0;
    transition: all 300ms ease 0s;
    &:hover {
      color: #731bb6;
      top: -5px;
    }
  }
  .mobile-menu {
    display: none;
  }
  @media (max-width: 1024px) {
    justify-content: space-between;
    .mobile-menu {
      display: block;
    }
    .is-open {
      position: absolute;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      width: 100vw;
      height: 90vh;
      background-color: #020617ea;
      margin: 0;
      padding: 0;
      padding-top: 10vh;
      font-size: 1.5rem;
      z-index: -1;
    }
  }
`;

export default HeaderDefaultStyled;
