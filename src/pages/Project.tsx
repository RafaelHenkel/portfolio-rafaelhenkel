import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageDefault from '../components/PageDefault';
import projects from '../config/projects';
import Subtitle from '../components/text-styles/Subtitle';
import DefaultContainer from '../components/default-container/DefaultContainer';

interface ProjectType {
  id: number;
  name: string;
  type: string;
  image: string;
  key: string;
  url: string;
  languages: string[];
  about: string;
}
function Project() {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectType>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const projectFind = projects.find(item => item.id === parseInt(id));

    setProject(projectFind);

    document.title = `Projeto - ${project?.name}`;
  }, [project]);

  return (
    <>
      <PageDefault>
        <DefaultContainer>
          <Subtitle>{project?.name}</Subtitle>
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Project;
