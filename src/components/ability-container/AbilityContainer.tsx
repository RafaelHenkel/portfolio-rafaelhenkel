import AbilityContainerStyled from './AbilityContainerStyled';
import AbilityCard from './AbilityCard';
import htmlImage from '../../assets/skills-images/html5-image.png';
import cssImage from '../../assets/skills-images/css3-image.png';
import jsImage from '../../assets/skills-images/javascript-image.png';
import tsImage from '../../assets/skills-images/typescript-image.png';
import reactImage from '../../assets//skills-images/react-image.png';
import nodeImage from '../../assets//skills-images/node-image.png';
import gitImage from '../../assets//skills-images/git-image.png';
import styledImage from '../../assets//skills-images/styled-components-image.png';
import bootstrapImage from '../../assets/skills-images/boostrap-image.png';
import ImageStyled from './ImageStyled';

function AbilityContainer() {
  return (
    <>
      <AbilityContainerStyled>
        <AbilityCard>
          <ImageStyled src={htmlImage} alt="HTML5 image" />
          <p>HTML5</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={cssImage} alt="CSS3 image" />
          <p>CSS3</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={jsImage} alt="Javascript image" />
          <p>Javascript</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={tsImage} alt="Typescript image" />
          <p>Typescript</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={reactImage} alt="ReactJS image" />
          <p>React</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={nodeImage} alt="NodeJS image" />
          <p>NodeJS</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={gitImage} alt="Git image" />
          <p>GIT</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={styledImage} alt="Styled Component image" />
          <p>Styled Components</p>
        </AbilityCard>
        <AbilityCard>
          <ImageStyled src={bootstrapImage} alt="Boostrap image" />
          <p>Bootstrap</p>
        </AbilityCard>
      </AbilityContainerStyled>
    </>
  );
}

export default AbilityContainer;
