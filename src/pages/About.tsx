import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';

function About() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Sobre';
  }, []);
  return (
    <>
      <PageDefault>
        <h1>About page</h1>
        <small style={{ color: '#ffffff' }}>Página em desenvolvimento</small>
      </PageDefault>
    </>
  );
}

export default About;
