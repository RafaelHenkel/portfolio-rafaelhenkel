import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import AbilityContainer from '../components/ability-container/AbilityContainer';

function Skills() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Habilidades';
  }, []);
  return (
    <>
      <PageDefault>
        <DefaultContainer>
          <Subtitle>Softskills</Subtitle>

          <Subtitle>Hardskills</Subtitle>
          <AbilityContainer />
          <small style={{ color: '#ffffff', paddingTop: '5vh' }}>Página em desenvolvimento</small>
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Skills;
