import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import ContactsContainer from '../components/contacts-container/ContactsContainer';

function Contact() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Contato';
  }, []);
  return (
    <>
      <PageDefault>
        <DefaultContainer>
          <Subtitle>Contato</Subtitle>
          <p style={{ color: '#a7a7a7' }}>VAMOS CONVERSAR!</p>
          <ContactsContainer />
          <small style={{ color: '#ffffff' }}>Página em desenvolvimento</small>
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Contact;
