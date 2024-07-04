import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';

function Skills() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Habilidades';
  }, []);
  return (
    <>
      <PageDefault>
        <h1>Skills page</h1>
        <small style={{ color: '#ffffff' }}>Página em desenvolvimento</small>
      </PageDefault>
    </>
  );
}

export default Skills;
