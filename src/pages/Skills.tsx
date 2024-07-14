import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import AbilityContainer from '../components/ability-container/AbilityContainer';
import SoftskillsCard from '../components/ability-container/SoftSkillsCard';

function Skills() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Habilidades';
  }, []);
  return (
    <>
      <PageDefault>
        <DefaultContainer>
          <Subtitle>Softskills</Subtitle>
          <SoftskillsCard />
          <Subtitle>Hardskills</Subtitle>
          <AbilityContainer />
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Skills;
