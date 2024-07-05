import projects from '../../config/projects';
import ProjectContainerStyled from './ProjectsContainerStyled';
import ProjectsTitlesStyled from './ProjectsTitlesStyled';

function ProjectsContainer() {
  return (
    <>
      <ProjectContainerStyled>
        {projects.map(project => (
          <a href={project.url} target="_blank" key={project.key}>
            <ProjectsTitlesStyled>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </ProjectsTitlesStyled>
            <img src={project.image} alt={project.name} />
          </a>
        ))}
      </ProjectContainerStyled>
    </>
  );
}

export default ProjectsContainer;
