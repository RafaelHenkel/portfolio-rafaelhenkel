import styled from 'styled-components';

const ProjectContainerStyled = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  li {
    width: 24rem;
    height: 14rem;
    position: relative;
  }
  img {
    width: 24rem;
    height: 14rem;
  }
  h3 {
    color: #ffffff;
    position: absolute;
    top: 35%;
    font-size: 1.6rem;
    margin: 0;
    padding-left: 1rem;
    z-index: 1;
  }
  p {
    position: absolute;
    top: 55%;
    font-size: 1.2rem;
    margin: 0;
    padding-left: 1rem;
    z-index: 1;
  }
`;

export default ProjectContainerStyled;
