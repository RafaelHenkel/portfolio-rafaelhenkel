import styled from 'styled-components';

const HeaderMenuStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
  gap: 2rem;
  li {
    transition-duration: 0.3s;
    position: relative;
  }
  li:focus:after,
  li:hover:after {
    width: 100%;
    left: 0%;
  }
  li:after {
    content: '';
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #a7a7a7;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default HeaderMenuStyled;
