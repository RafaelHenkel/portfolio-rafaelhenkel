import { useEffect } from 'react';
import PageDefault from '../components/PageDefault';
import DefaultContainer from '../components/default-container/DefaultContainer';
import AboutContainer from '../components/about-container/AboutContainer';

function About() {
  useEffect(() => {
    document.title = 'Rafael Henkel - Sobre';
  }, []);
  return (
    <>
      <PageDefault>
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
      </PageDefault>
    </>
  );
}

export default About;
