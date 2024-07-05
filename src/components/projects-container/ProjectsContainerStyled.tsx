import styled from 'styled-components';

const ProjectContainerStyled = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;
  a {
    color: #ffffff;
    width: 24rem;
    height: 14rem;
    position: relative;
    transition: all 0.5s;
  }
  img {
    border-radius: 10px;
    width: 24rem;
    height: 14rem;
  }
`;

export default ProjectContainerStyled;
