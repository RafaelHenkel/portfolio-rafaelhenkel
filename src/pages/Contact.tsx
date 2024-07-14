import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import ContactsContainer from '../components/contacts-container/ContactsContainer';
import Form from '../components/form/Form';

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
          <Form />
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Contact;
