import AbilityContainerStyled from './AbilityContainerStyled';
import AbilityCard from './AbilityCard';
import ImageStyled from './ImageStyled';
import skills from '../../config/skills';

function AbilityContainer() {
  return (
    <>
      <AbilityContainerStyled>
        {skills.map(item => (
          <AbilityCard key={item.key}>
            <ImageStyled src={item.image} alt={item.skill} />
            <p>{item.skill}</p>
          </AbilityCard>
        ))}
      </AbilityContainerStyled>
    </>
  );
}

export default AbilityContainer;
