import PageDefault from '../components/PageDefault';
import AbilityContainer from '../components/ability-container/AbilityContainer';
import AboutContainer from '../components/about-container/AboutContainer';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import ContactsContainer from '../components/contacts-container/ContactsContainer';
import { useEffect } from 'react';
import ProjectsContainer from '../components/projects-container/ProjectsContainer';
import HomeContainer from '../components/home-container/HomeContainer';

function Home() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Desenvolvedor Fullstack';
  }, []);
  return (
    <>
      <PageDefault>
        <DefaultContainer minHeight="50rem" alignItems="start">
          <HomeContainer />
        </DefaultContainer>
        <DefaultContainer>
          <AboutContainer>
            <h2>Deixe-me apresentar</h2>
            <p>
              Ola! meu nome é Rafael Henkel, Sou um desenvolvedor web fullstack aluno da 18ª edição do Programa Starter
              Web Full Stack na Growdev onde já aprendi e vou aprender varias linguagens como HTML5, CSS3, Javascrip,
              Typescript, React entre muitas outras tecnologias.
              <br />
              Atualmente não estou trabalhando na area porem estou em busca de uma vaga de emprego.
            </p>
          </AboutContainer>
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Habilidades</Subtitle>
          <AbilityContainer />
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Projetos</Subtitle>
          <ProjectsContainer />
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Contato</Subtitle>
          <p style={{ color: '#a7a7a7' }}>VAMOS CONVERSAR!</p>
          <ContactsContainer />
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Home;
