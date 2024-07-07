import styled from 'styled-components';

const ContactsImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-color: #13131f;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
  }
`;

export default ContactsImage;
