import styled from 'styled-components';

const ContactContentStyled = styled.a`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.1rem;
  color: #ffffff;
  transition: 0.5s ease;
  &:hover {
    scale: 1.2;
  }
  small {
    color: #a7a7a7;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default ContactContentStyled;
