import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';

function Projects() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Projects';
  }, []);
  return (
    <>
      <PageDefault>
        <h1 style={{ color: '#ffffff' }}>Projects page</h1>
        <small style={{ color: '#ffffff' }}>Página em desenvolvimento</small>
      </PageDefault>
    </>
  );
}

export default Projects;
