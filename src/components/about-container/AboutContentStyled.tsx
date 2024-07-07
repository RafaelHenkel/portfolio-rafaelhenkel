import styled from 'styled-components';

const AboutContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  justify-content: center;
  text-align: start;
  margin: 2rem;
  padding: 0;
  h2 {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }
  @media (max-width: 1024px) {
    text-align: center;
    grid-column: 1;
  }
`;

export default AboutContentStyled;
