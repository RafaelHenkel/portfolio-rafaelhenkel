import styled from 'styled-components';

const ContactContainerStyled = styled.div`
  display: grid;
  margin: 0;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ContactContainerStyled;
