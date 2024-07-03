import PageDefault from '../components/PageDefault';
import AbilityContainer from '../components/ability-container/AbilityContainer';
import AboutContainer from '../components/about-container/AboutContainer';
import DefaultContainer from '../components/default-container/DefaultContainer';
import Subtitle from '../components/text-styles/Subtitle';
import ContactsContainer from '../components/contacts-container/ContactsContainer';

function Home() {
  return (
    <>
      <PageDefault>
        <DefaultContainer firstContainer={true}>
          <h2 style={{ color: '#a7a7a7', fontWeight: '400' }}>Olá, meu nome é</h2>
          <h1>Rafael Henkel</h1>
          <h2 className="line">Fullstack Web Developer</h2>
        </DefaultContainer>
        <DefaultContainer>
          <AboutContainer>
            <Subtitle padding={false}>Deixe-me apresentar</Subtitle>
            <p>
              Ola! meu nome é Rafael Henkel, Sou um desenvolvedor web fullstack aluno da 18ª edição do Programa Starter
              Web Full Stack na Growdev onde já aprendi e vou aprender varias linguagens como HTML5, CSS3, Javascrip,
              Typescript, React entre muitas outras tecnologias.
            </p>
            <p>Atualmente não estou trabalhando na area porem estou em busca de uma vaga de emprego</p>
          </AboutContainer>
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Habilidades.</Subtitle>
          <AbilityContainer />
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Projetos.</Subtitle>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolorum obcaecati iusto id ad dicta. Neque
            laborum laboriosam error, eum veritatis repellat alias pariatur nobis nisi maiores voluptatum provident
            distinctio?
          </p>
        </DefaultContainer>
        <DefaultContainer>
          <Subtitle>Contato.</Subtitle>
          <p style={{ color: '#a7a7a7' }}>VAMOS CONVERSAR!</p>
          <ContactsContainer />
        </DefaultContainer>
      </PageDefault>
    </>
  );
}

export default Home;
