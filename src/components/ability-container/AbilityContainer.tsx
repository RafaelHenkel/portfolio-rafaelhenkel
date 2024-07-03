import AbilityContainerStyled from './AbilityContainerStyled';
import AbilityCard from './AbilityCard';

function AbilityContainer() {
  return (
    <>
      <AbilityContainerStyled>
        <AbilityCard>
          <p>HTML5</p>
        </AbilityCard>
        <AbilityCard>
          <p>CSS3</p>
        </AbilityCard>
        <AbilityCard>
          <p>Javascript</p>
        </AbilityCard>
        <AbilityCard>
          <p>Typescript</p>
        </AbilityCard>
        <AbilityCard>
          <p>React</p>
        </AbilityCard>
        <AbilityCard>
          <p>NodeJS</p>
        </AbilityCard>
        <AbilityCard>
          <p>GIT</p>
        </AbilityCard>
        <AbilityCard>
          <p>Styled Components</p>
        </AbilityCard>
        <AbilityCard>
          <p>Bootstrap</p>
        </AbilityCard>
      </AbilityContainerStyled>
    </>
  );
}

export default AbilityContainer;
