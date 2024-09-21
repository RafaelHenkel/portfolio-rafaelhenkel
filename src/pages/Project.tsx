import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageDefault from '../components/PageDefault';
import projects from '../config/projects';
import DefaultContainer from '../components/default-container/DefaultContainer';
import { Grid2 as Grid, Typography } from '@mui/material';

interface ProjectType {
  id: number;
  name: string;
  type: string;
  image: string;
  key: string;
  url: string;
  languages: { name: string }[];
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
          <Grid container spacing={2}>
            <Grid size={12}></Grid>
            <Grid size={{ md: 7, xs: 12 }}>
              <img src={project?.image} alt={project?.key} />
            </Grid>
            <Grid size={{ md: 5, xs: 12 }} alignSelf={'center'}>
              <Typography variant="h3" color="#fff" fontWeight={'700'}>
                {project?.name}
              </Typography>
              <Typography variant="subtitle1" color="#fff" sx={{ paddingBottom: '1em' }}>
                {project?.about}
              </Typography>
              <Typography variant="subtitle1" color="#fff" sx={{ paddingBottom: '1em' }}>
                Linguagens utilizadas:
              </Typography>
              {project?.languages.map(language => (
                <Typography key={language.name} variant="body2" color="#fff" sx={{ paddingBottom: '0.5em' }}>
                  {language.name}
                </Typography>
              ))}
              <a href={project?.url} target="_blank">
                <Typography variant="subtitle1" color="#fff" sx={{ paddingTop: '1em', ':hover': { color: '#731bb6' } }}>
                  Ver projeto
                </Typography>
              </a>
            </Grid>
          </Grid>
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Project;
