import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';

function Contact() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Contato';
  }, []);
  return (
    <>
      <PageDefault>
        <h1 style={{ color: '#ffffff' }}>Contact page</h1>
        <small style={{ color: '#ffffff' }}>Página em desenvolvimento</small>
      </PageDefault>
    </>
  );
}

export default Contact;
