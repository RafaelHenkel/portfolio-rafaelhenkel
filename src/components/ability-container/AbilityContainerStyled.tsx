import styled from 'styled-components';

const AbilityContainerStyled = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default AbilityContainerStyled;
