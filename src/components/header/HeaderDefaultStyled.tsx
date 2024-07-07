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
  }
`;

export default HeaderDefaultStyled;
