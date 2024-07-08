import styled from 'styled-components';

const HeaderMenuStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  gap: 2rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default HeaderMenuStyled;
