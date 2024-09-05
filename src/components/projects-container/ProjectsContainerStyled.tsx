import styled from 'styled-components';

const ProjectContainerStyled = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
  a {
    color: #ffffff;
    width: 24rem;
    height: 14rem;
    position: relative;
    transition: all 0.5s;
    border-radius: 15px;
    border: 3px solid #040d31;
    transition: 0.5s;
    &:hover {
      border-color: #731bb6;
    }
  }
  p {
    color: #731bb6;
  }
  img {
    border-radius: 10px;
    width: 24rem;
    height: 14rem;
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProjectContainerStyled;
