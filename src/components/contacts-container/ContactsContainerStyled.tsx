import styled from 'styled-components';

const ContactContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ContactContainerStyled;
