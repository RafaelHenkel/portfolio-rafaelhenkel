import projects from '../../config/projects';
import ProjectContainerStyled from './ProjectsContainerStyled';
import ProjectsTitlesStyled from './ProjectsTitlesStyled';
import { Link } from 'react-router-dom';

function ProjectsContainer() {
  return (
    <>
      <ProjectContainerStyled>
        {projects.map(project => (
          <Link to={`/project/${project.id}`} key={project.key}>
            <ProjectsTitlesStyled>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </ProjectsTitlesStyled>
            <img src={project.image} alt={project.name} />
          </Link>
        ))}
      </ProjectContainerStyled>
    </>
  );
}

export default ProjectsContainer;
