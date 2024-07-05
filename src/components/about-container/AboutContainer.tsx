import React from 'react';
import AboutContainerStyled from './AboutContainerStyled';
import AboutContentStyled from './AboutContentStyled';
import AboutImageStyled from './AboutImageStyled';
import myImage from '../../assets/image.jpeg';
import AboutButtonStyled from './AboutButtonStyled';

interface AboutContainerProps {
  children: React.ReactNode;
}
function AboutContainer({ children }: AboutContainerProps) {
  return (
    <>
      <AboutContainerStyled>
        <AboutImageStyled src={myImage} alt="Imagem Rafael Henkel" />
        <AboutContentStyled>
          {children}
          <AboutButtonStyled>Ler mais</AboutButtonStyled>
        </AboutContentStyled>
      </AboutContainerStyled>
    </>
  );
}

export default AboutContainer;
