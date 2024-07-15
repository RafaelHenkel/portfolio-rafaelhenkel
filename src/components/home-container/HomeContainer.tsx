import imageHome from '../../../public/image-home.png';
import HomeContextStyled from './HomeContextStyled';
import HomeImageContainerStyled from './HomeImageContainerStyled';
import HomeStyled from './HomeContainerStyled';
import HomeImageStyled from './HomeImageStyled';

function HomeContainer() {
  return (
    <>
      <HomeStyled>
        <HomeContextStyled>
          <div>
            <span>👋🏻</span>
            <h2 className="hello-message">Olá, meu nome é</h2>
          </div>
          <h1>Rafael Henkel</h1>
          <h2 className="line">Fullstack Web Developer</h2>
        </HomeContextStyled>
        <HomeImageContainerStyled>
          <HomeImageStyled src={imageHome} alt="image-home" />
        </HomeImageContainerStyled>
      </HomeStyled>
    </>
  );
}

export default HomeContainer;
