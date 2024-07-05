import projects from '../../config/projects';
import ProjectContainerStyled from './ProjectsContainerStyled';

function ProjectsContainer() {
  return (
    <>
      <ProjectContainerStyled>
        {projects.map(project => (
          <li key={project.key}>
            <h3>{project.name}</h3>
            <p>{project.type}</p>
            <img src={project.image} alt={project.name} />
          </li>
        ))}
      </ProjectContainerStyled>
    </>
  );
}

export default ProjectsContainer;
