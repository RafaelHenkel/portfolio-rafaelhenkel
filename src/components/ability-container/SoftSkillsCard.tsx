import AbilityCard from './AbilityCard';
import AbilityContainerStyled from './AbilityContainerStyled';
import softSkills from '../../config/softSkills';

function SoftskillsCard() {
  return (
    <>
      <AbilityContainerStyled>
        {softSkills.map(item => (
          <AbilityCard key={item.key}>
            <p>{item.skill}</p>
          </AbilityCard>
        ))}
      </AbilityContainerStyled>
    </>
  );
}

export default SoftskillsCard;
