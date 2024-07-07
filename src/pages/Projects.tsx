import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import ProjectsContainer from '../components/projects-container/ProjectsContainer';

function Projects() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Projects';
  }, []);
  return (
    <>
      <PageDefault>
        <DefaultContainer>
          <Subtitle>Projetos</Subtitle>
          <ProjectsContainer />
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Projects;
