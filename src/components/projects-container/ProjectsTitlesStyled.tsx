import styled from 'styled-components';

const ProjectsTitlesStyled = styled.div`
  width: 24rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  margin: 0;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  background: linear-gradient(180deg, rgba(9, 9, 121, 0) 0%, rgba(0, 0, 0, 1) 100%);
  border-radius: 10px;
  &:hover {
    opacity: 1;
  }
  h3 {
    padding-left: 1rem;
    font-size: 1.6rem;
    margin: 0;
  }
  p {
    padding-left: 1rem;
    font-size: 1.2rem;
    margin: 0;
  }
  small {
    padding-left: 1rem;
  }
`;

export default ProjectsTitlesStyled;
