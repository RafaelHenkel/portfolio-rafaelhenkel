import styled from 'styled-components';

const AboutContainerStyled = styled.section`
  width: 65rem;
  height: 25rem;
  border-radius: 10px;
  background-color: #13131f;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1024px) {
    width: 30rem;
    height: 60rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: 480px) {
    width: 20rem;
    height: 60rem;
    grid-template-columns: 1fr;
  }
`;

export default AboutContainerStyled;
