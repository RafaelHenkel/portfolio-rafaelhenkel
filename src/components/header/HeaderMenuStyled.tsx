import styled from 'styled-components';

const HeaderMenuStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  gap: 2rem;
  @media (max-width: 1024px) {
    display: none;
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

export default HeaderMenuStyled;
