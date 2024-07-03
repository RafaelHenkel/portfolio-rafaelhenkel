import styled from 'styled-components';

const ContactContentStyled = styled.a`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: #ffffff;
  transition: 0.5s ease;
  &:hover {
    scale: 1.3;
  }
  small {
    color: #a7a7a7;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default ContactContentStyled;
